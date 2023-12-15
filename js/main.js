let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('open');
}











// S T A R T   L O A D I N G
document.querySelector(".all").style.display = "none";
document.getElementById("loader").classList.add("loader");

setTimeout(() => {
  document.querySelector(".all").style.display = "block";
  document.getElementById("loader").classList.remove("loader");
  document.getElementById("center").style.display = "none";
}, 1000);
// E N D   L O A D I N G




// S T A R T   A C T I V E   L I N K S
let link = document.querySelectorAll(".link");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    for (let j = 0; j < link.length; j++) {
      link[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}
// E N D   A C T I V E   L I N K S

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let sale = document.querySelector('.sale');
let rent = document.querySelector('.rent');

btn1.onclick = function(){
  sale.style.display = 'block';
  rent.style.display = 'none';
}

btn2.onclick = function(){
  sale.style.display = 'none';
  rent.style.display = 'block';
}



let btns = document.querySelectorAll(".btn");


for (let b = 0; b < btns.length; b++) {
  btns[b].addEventListener("click", function () {
    for (let n = 0; n < btns.length; n++) {
      btns[n].classList.remove("active");
    }
    this.classList.add("active");
  });
}




let header = document.querySelector('.header');

window.onscroll = function(){
  if(scrollY >=100){
    header.style.background = "#f5f4f4";
  } else
  {
    header.style.background = 'transparent'
  }
}





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});