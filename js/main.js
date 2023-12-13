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