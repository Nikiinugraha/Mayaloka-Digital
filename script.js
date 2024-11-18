const hamburger_icon = document.getElementById("hamburger-icon");
const menuList = document.getElementById("nav-menu");
const menuBtnIcon = hamburger_icon.querySelector("i")

hamburger_icon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");

    const isOpen = menuList.classList.contains("hidden");
    menuBtnIcon.setAttribute("class", isOpen ? "ph ph-x" : "ph ph-list")
});
