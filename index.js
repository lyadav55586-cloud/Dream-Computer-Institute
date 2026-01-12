// Page fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "0.8s";
    document.body.style.opacity = "1";
  }, 100);
});

// COURSE DETAILS DATA
const courses = {
  "DCA": {
    duration: "6 Months",
    fees: "₹____",
    details: [
      "Computer Fundamentals",
      "MS Word, Excel, PowerPoint",
      "Internet & Email",
      "Practical Training",
      "Certificate Provided"
    ]
  },

  "ADCA": {
    duration: "12 Months",
    fees: "₹____",
    details: [
      "Advanced Computer",
      "MS Office Full",
      "Tally with GST",
      "Internet Technology",
      "Practical + Certificate"
    ]
  },

  "Basic Computer": {
    duration: "3 Months",
    fees: "₹____",
    details: [
      "Computer Basics",
      "Typing Basics",
      "Internet Use",
      "Practical Training"
    ]
  },

  "MS Office": {
    duration: "2 Months",
    fees: "₹____",
    details: [
      "MS Word",
      "MS Excel",
      "MS PowerPoint"
    ]
  },

  "Tally": {
    duration: "3 Months",
    fees: "₹____",
    details: [
      "Accounting Basics",
      "Tally ERP",
      "GST Practical"
    ]
  },

  "Typing": {
    duration: "2 Months",
    fees: "₹____",
    details: [
      "Hindi Typing",
      "English Typing",
      "Speed Practice"
    ]
  }
};

// OPEN COURSE POPUP
function openCourse(name) {
  const c = courses[name];
  document.getElementById("cName").innerText = name;
  document.getElementById("cDuration").innerText = c.duration;
  document.getElementById("cFees").innerText = c.fees;

  const list = document.getElementById("cDetails");
  list.innerHTML = "";
  c.details.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });

  document.getElementById("courseModal").style.display = "block";
}

// CLOSE POPUP
function closeCourse() {
  document.getElementById("courseModal").style.display = "none";
}