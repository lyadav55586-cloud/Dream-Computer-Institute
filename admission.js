/******** FIREBASE CONFIG ********/
const firebaseConfig = {
  apiKey: "PASTE_YOUR_KEY",
  authDomain: "PASTE.firebaseapp.com",
  databaseURL: "https://PASTE.firebaseio.com",
  projectId: "PASTE",
  storageBucket: "PASTE.appspot.com",
  messagingSenderId: "PASTE",
  appId: "PASTE"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

/******** PAYMENT ********/
function showPayment(){
  document.getElementById("paymentBox").style.display="block";

  const upi =
   "upi://pay?pa=rahulyadav79123@okicici&pn=Dream%20Computer&am=500&cu=INR";
  window.location.href = upi;
}

function checkPayment(){
  const txn = document.getElementById("txn").value.trim();
  const paid = document.getElementById("paid").checked;
  document.getElementById("finalBtn").disabled = !(txn.length >= 6 && paid);
}

/******** FINAL SUBMIT ********/
function handleFinalSubmit(e){
  e.preventDefault();

  const txn = document.getElementById("txn").value.trim();
  const paid = document.getElementById("paid").checked;

  if(!txn || !paid){
    alert("Payment required!");
    return false;
  }

  saveFirebase();
  generateSlip();
  successPopup();
  whatsappSend();

  setTimeout(()=>{
    document.getElementById("admissionForm").submit();
  },1500);

  return false;
}

/******** SAVE TO FIREBASE ********/
function saveFirebase(){
  const data = {
    name: name.value,
    father: father.value,
    mobile: mobile.value,
    email: email.value,
    course: course.value,
    txn: txn.value,
    time: new Date().toLocaleString()
  };

  db.ref("admissions").push(data);
}

/******** PDF ********/
function generateSlip(){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Dream Computer Institute",20,20);
  doc.text("Admission Slip",20,30);
  doc.text("Name: "+name.value,20,45);
  doc.text("Mobile: "+mobile.value,20,55);
  doc.text("Course: "+course.value,20,65);
  doc.text("Fees: ₹500 PAID",20,75);
  doc.text("Txn ID: "+txn.value,20,85);

  doc.save("Admission_Slip.pdf");
}

/******** SUCCESS ********/
function successPopup(){
  const d=document.createElement("div");
  d.id="successPopup";
  d.innerHTML=`<div class="popup-box">
  <h3>✅ Admission Successful</h3>
  <p>Slip Downloaded</p></div>`;
  document.body.appendChild(d);
  d.style.display="flex";

  setTimeout(()=>location.href="index.html",3000);
}

/******** WHATSAPP ********/
function whatsappSend(){
  const msg =
`New Admission
Name: ${name.value}
Mobile: ${mobile.value}
Course: ${course.value}
Txn: ${txn.value}`;

  const url =
`https://wa.me/917905971243?text=${encodeURIComponent(msg)}`;
  window.open(url,"_blank");
}
