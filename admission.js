// 🔴 EDIT HERE
const UPI_ID = "rahulyadav@upi"; // apni UPI ID
const WHATSAPP_API_KEY = "YOUR_API_KEY"; // CallMeBot key
const ADMIN_PHONE = "917905971243";

let currentCaptcha = "";

// detect mobile
function isMobile(){
  return /Android|iPhone/i.test(navigator.userAgent);
}

// start payment
function startPayment(){
  const name = document.getElementById("name").value;
  const course = document.getElementById("course").value;

  if(name === "" || course === ""){
    alert("Please fill form first");
    return;
  }

  document.getElementById("paymentBox").style.display="block";

  if(isMobile()){
    const upiURL =
`upi://pay?pa=${UPI_ID}&pn=Dream Computer Institute&am=500&cu=INR&tn=Admission Fees`;
    window.location.href = upiURL;
  }
}

// captcha
function generateCaptcha(){
  const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let cap="";
  for(let i=0;i<5;i++){
    cap+=chars[Math.floor(Math.random()*chars.length)];
  }
  currentCaptcha=cap;
  document.getElementById("captchaText").innerText=cap;
  document.getElementById("captchaInput").value="";
}
window.onload=generateCaptcha;

// check enable submit
function checkAll(){
  const txn=document.getElementById("txn").value.trim();
  const paid=document.getElementById("paid").checked;
  const cap=document.getElementById("captchaInput").value.trim();

  document.getElementById("finalBtn").disabled =
    !(txn && paid && cap===currentCaptcha);
}

// final submit
function finalSubmit(){
  sendWhatsApp();
  generatePDF();
  return true;
}

// whatsapp
function sendWhatsApp(){
  const n=name.value;
  const m=mobile.value;
  const c=course.value;
  const t=txn.value;

  const msg=`NEW ADMISSION
Name: ${n}
Mobile: ${m}
Course: ${c}
Fees: ₹500
Txn: ${t}`;

  fetch(
`https://api.callmebot.com/whatsapp.php?phone=${ADMIN_PHONE}&text=${encodeURIComponent(msg)}&apikey=${WHATSAPP_API_KEY}`
  );
}

// pdf
function generatePDF(){
  const {jsPDF}=window.jspdf;
  const doc=new jsPDF();

  doc.text("Dream Computer Institute",20,20);
  doc.text("ADMISSION SLIP",20,30);

  doc.text("Name: "+name.value,20,45);
  doc.text("Father: "+father.value,20,55);
  doc.text("Mobile: "+mobile.value,20,65);
  doc.text("Course: "+course.value,20,75);
  doc.text("Fees: ₹500 PAID",20,85);
  doc.text("Txn ID: "+txn.value,20,95);

  doc.save("Admission_Slip.pdf");
}
