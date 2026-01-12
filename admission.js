// Payment section show
function showPayment(){
  const box = document.getElementById("paymentBox");
  box.style.display = "block";
  box.scrollIntoView({ behavior: "smooth" });
}

// Enable final submit only after payment confirmation
function checkPayment(){
  const txn = document.getElementById("txn").value.trim();
  const paid = document.getElementById("paid").checked;
  document.getElementById("finalBtn").disabled = !(txn && paid);
}

// Generate Admission Slip PDF
function generateSlip(){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const name   = document.getElementById("name").value;
  const father = document.getElementById("father").value;
  const mobile = document.getElementById("mobile").value;
  const course = document.getElementById("course").value;
  const txn    = document.getElementById("txn").value;
  const date   = new Date().toLocaleDateString();

  doc.setFontSize(16);
  doc.text("Dream Computer Institute", 20, 20);

  doc.setFontSize(12);
  doc.text("OFFICIAL ADMISSION SLIP", 20, 30);

  doc.setFontSize(11);
  doc.text("Student Name : " + name, 20, 45);
  doc.text("Father Name  : " + father, 20, 55);
  doc.text("Mobile No.   : " + mobile, 20, 65);
  doc.text("Course       : " + course, 20, 75);
  doc.text("Fees Paid    : ₹500", 20, 85);
  doc.text("Transaction ID : " + txn, 20, 95);
  doc.text("Date         : " + date, 20, 105);

  doc.text("Payment Status : PAID", 20, 120);

  doc.setFontSize(10);
  doc.text("Bring this slip to institute for verification.", 20, 135);
  doc.text("Address: Bishkohar Road, Gainsari, Balrampur", 20, 145);

  doc.save("Admission_Slip_Dream_Computer_Institute.pdf");
}