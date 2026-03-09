let hamBtn = document.querySelector(".mainbtn");
let navCol = document.querySelector(".nav-col");
let nav = document.querySelector(".nav");

hamBtn.addEventListener("click", () => {
  console.log("hello");
  navCol.classList.toggle("hamToggle");
})

document.addEventListener("click", (e) => {

  if (!navCol.contains(e.target) && !hamBtn.contains(e.target)) {
    navCol.classList.remove("hamToggle");
  }
  
})