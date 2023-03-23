// Navbar Mobile
headerMenu = document.querySelector(".header__menu");
siderbarClose = document.querySelector(".sidebarClose");
siderbarOpen = document.querySelector(".burger");

siderbarOpen.addEventListener("click", () => {
    headerMenu.classList.add("active");
});

siderbarClose.addEventListener("click", () => {
    headerMenu.classList.remove("active");
});
