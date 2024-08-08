let mobileToggleMenuEl = document.getElementById("mobile-menu-toggle");
let mobileMenuEl = document.getElementById("mobile-menu");

function toggleMenu() {
mobileToggleMenuEl.addEventListener("click", function(){
  mobileMenuEl.classList.toggle("hidden");
})
}