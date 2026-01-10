// Welcome Message
window.onload = function () {
  setTimeout(() => {
    alert("Welcome to Dream Computer Institute");
  }, 800);
};

// Button Ripple Effect
document.querySelectorAll("button, .btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});

// Suchna Board Toggle
function openNotice() {
  let box = document.getElementById("noticeBox");
  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
    box.scrollIntoView({ behavior: "smooth" });
  }
}

// Pre Complete Course Toggle
function openCourse() {
  let box = document.getElementById("courseBox");
  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
    box.scrollIntoView({ behavior: "smooth" });
  }
}

// Admission Submit Message
function admissionSubmit() {
  alert("Admission Form Submitted Successfully!\nDream Computer Institute");
}

// Image Hover Animation
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "0.4s";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});

// Auto Marquee Pause on Hover
document.querySelectorAll("marquee").forEach(mq => {
  mq.addEventListener("mouseover", () => mq.stop());
  mq.addEventListener("mouseout", () => mq.start());
});