let subtext_about = document.getElementById("subtext-about");
let subtext_visi = document.getElementById("subtext-visi");
let subtext_misi = document.getElementById("subtext-misi");
let nav = document.getElementById("navbar");
let active = nav.getElementsByTagName("a");

document.querySelector(".second-button").addEventListener("click", function () {
  document.querySelector(".animated-icon2").classList.toggle("open");
});

for (let i = 0; i < active.length; i++) {
  active[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

if (window.innerWidth > 991) {
  nav.classList.replace("navbar-light", "navbar-dark");
}

if (window.innerWidth > 767) {
  subtext_about.classList.add("fs-2 fw-normal");
  subtext_visi.classList.add("fs-2 fw-normal");
  subtext_misi.classList.add("fs-2 fw-normal");
}
