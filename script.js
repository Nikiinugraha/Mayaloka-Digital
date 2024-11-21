const hamburger_icon = document.getElementById("hamburger-icon");
const menuList = document.getElementById("nav-menu");
const menuBtnIcon = hamburger_icon.querySelector("i")

hamburger_icon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");

    const isOpen = menuList.classList.contains("hidden");
    menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars")
});
