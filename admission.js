<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Online Admission | Dream Computer Institute</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- jsPDF -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<style>
body{
  margin:0;
  font-family:Segoe UI,sans-serif;
  background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);
}
header{
  color:#fff;
  text-align:center;
  padding:20px;
}
.form-box{
  max-width:480px;
  background:#fff;
  margin:20px auto;
  padding:25px;
  border-radius:18px;
  box-shadow:0 15px 30px rgba(0,0,0,0.3);
}
input,select,button{
  width:100%;
  padding:11px;
  margin-top:10px;
  border-radius:8px;
  border:1px solid #ccc;
}
button{
  background:#2563eb;
  color:#fff;
  font-weight:bold;
  cursor:pointer;
}
button:disabled{background:#94a3b8}
#paymentBox{display:none;text-align:center;margin-top:20px}
#paymentBox img{width:220px;margin:15px 0}
.captcha{
  background:#e0f2fe;
  padding:10px;
  border-radius:8px;
  margin-top:10px;
}
footer{
  text-align:center;
  color:#fff;
  padding:10px;
}
#successPopup{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.6);
  display:none;
  align-items:center;
  justify-content:center;
  z-index:999;
}
.popup-box{
  background:#fff;
  padding:30px;
  border-radius:16px;
  text-align:center;
  animation:pop .4s ease;
}
@keyframes pop{
  from{transform:scale(.6);opacity:0}
  to{transform:scale(1);opacity:1}
}
</style>
</head>

<body>

<header>
  <h2>Online Admission Form</h2>
  <p>Dream Computer Institute</p>
</header>

<div class="form-box">
<form id="admissionForm"
action="https://formsubmit.co/rahulyadav79123@gmail.com"
method="POST"
enctype="multipart/form-data"
onsubmit="return finalSubmit(event)">

<input type="hidden" name="_captcha" value="false">

<!-- STUDENT DETAILS -->
<input id="name" name="Student Name" placeholder="Student Name" required>
<input id="father" name="Father Name" placeholder="Father Name" required>
<input id="mobile" name="Mobile" placeholder="Mobile Number" required>
<input id="email" type="email" name="Email" placeholder="Student Email" required>
<input type="date" id="dob" name="Date of Birth" required>
<input id="aadhar" name="Aadhar Number" placeholder="Aadhar Number" required>
<input id="apaar" name="APAAR ID" placeholder="APAAR ID" required>

<select id="qualification" name="Qualification" required>
<option value="">Select Qualification</option>
<option>8th Pass</option>
<option>10th Pass</option>
<option>12th Pass</option>
<option>Graduate</option>
</select>

<select id="course" name="Course" required>
<option value="">Select Course</option>
<option>DCA</option>
<option>ADCA</option>
<option>CCC</option>
<option>MS Office</option>
<option>Tally</option>
</select>

<label>Passport Size Photo</label>
<input type="file" name="Photo" accept="image/*" required>

<label>Qualification Marksheet</label>
<input type="file" name="Marksheet" accept=".pdf,image/*" required>

<!-- CAPTCHA -->
<div class="captcha">
Solve: <b id="capQ"></b>
<input id="capAns" placeholder="Captcha Answer" required>
</div>

<button type="button" onclick="showPayment()">Submit & Pay Fees</button>

<!-- PAYMENT -->
<div id="paymentBox">
<h3>Admission Fees ₹500</h3>
<p>UPI ID: rahulyadav79123@okicici</p>
<img src="upi-qr.png" alt="UPI QR">

<input id="txn" name="Transaction ID" placeholder="Transaction ID" required>

<label>
<input type="checkbox" id="paid"> I confirm payment done
</label>

<button id="finalBtn" type="submit" disabled>
Final Submit & Download Slip
</button>
</div>

</form>
</div>

<footer>© 2026 Dream Computer Institute</footer>

<!-- SUCCESS POPUP -->
<div id="successPopup">
  <div class="popup-box">
    <h3>✅ Admission Successful</h3>
    <p>Slip downloaded</p>
  </div>
</div>

<script>
/* CAPTCHA */
let a=Math.floor(Math.random()*10)+1;
let b=Math.floor(Math.random()*10)+1;
document.getElementById("capQ").innerText=a+" + "+b+" = ?";

/* PAYMENT */
function showPayment(){
  document.getElementById("paymentBox").style.display="block";
  const upi="upi://pay?pa=rahulyadav79123@okicici&pn=Dream%20Computer&am=500&cu=INR";
  window.location.href=upi;
}

/* ENABLE FINAL BUTTON */
function checkEnable(){
  finalBtn.disabled=!(txn.value.length>=6 && paid.checked);
}
txn.oninput=checkEnable;
paid.onclick=checkEnable;

/* FINAL SUBMIT */
function finalSubmit(e){
  e.preventDefault();

  if(parseInt(capAns.value)!==(a+b)){
    alert("Captcha wrong");
    return false;
  }

  generatePDF();

  document.getElementById("successPopup").style.display="flex";

  setTimeout(()=>{
    admissionForm.submit();
    window.location.href="index.html";
  },3000);

  return false;
}

/* PDF SLIP */
function generatePDF(){
  const {jsPDF}=window.jspdf;
  const d=new jsPDF();
  d.text("Dream Computer Institute",20,20);
  d.text("Admission Slip",20,30);
  d.text("Name: "+name.value,20,45);
  d.text("Course: "+course.value,20,55);
  d.text("Fees: ₹500 PAID",20,65);
  d.text("Txn ID: "+txn.value,20,75);
  d.save("Admission_Slip.pdf");
}
</script>

</body>
</html>
