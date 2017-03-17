var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var section1 = document.querySelector(".sec1");
var section2 = document.querySelector(".sec2");
var section3 = document.querySelector(".sec3");
var content1 = document.querySelector(".cont1");
var content2 = document.querySelector(".cont2");
var content3 = document.querySelector(".cont3");

section1.addEventListener("click", function(event) {
   event.preventDefault();
   content1.classList.add("active");
   btn1.classList.add("active");
   content2.classList.remove("active");
   content3.classList.remove("active");
   btn2.classList.remove("active");
   btn3.classList.remove("active");
});

section2.addEventListener("click", function(event) {
   event.preventDefault();
   content2.classList.add("active");
   btn2.classList.add("active");
   content1.classList.remove("active");
   content3.classList.remove("active");
   btn1.classList.remove("active");
   btn3.classList.remove("active");
});

section3.addEventListener("click", function(event) {
   event.preventDefault();
   content3.classList.add("active");
   btn3.classList.add("active");
   content1.classList.remove("active");
   content2.classList.remove("active");
   btn1.classList.remove("active");
   btn2.classList.remove("active");
});
