const menuIcon = document.querySelector(".menu-icon");
const navContainer = document.querySelector(".nav-container");

 menuIcon.addEventListener("click", function() {
        navContainer.classList.toggle("active");
        menuIcon.classList.toggle("active");
});
