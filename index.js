function openPopup(t,txt){
  popup.style.display="flex";
  ptitle.innerText=t;
  ptext.innerText=txt;
}
function closePopup(){
  popup.style.display="none";
}

/* 🌙 Dark Mode */
function toggleDark(){
  document.body.classList.toggle("dark");
}

/* 🎥 Scroll Animation */
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-80){
      el.classList.add("active");
    }
  });
});
