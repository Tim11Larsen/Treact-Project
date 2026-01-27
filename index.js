function openMenu() {
  document.body.classList += " menu--open";
}
function closeMenu() {
  document.body.classList.remove("menu--open");
}

/* <button class="btn__menu" on click="openMenu()">
                    <i class="fa-solid fa-bars"></i>
                </button> */

                 /* <div class="menu">
            <svg></svg>
            <button class="btn__menu btn__menu--close" onclick="closeMenu()"></button>
            <div class="menu__links">
                <a href="#about" class="menu__link" onclick="closeMenu()">About</a>
                <a href="#blog" class="menu__link" onclick="closeMenu()">Blog</a>
                <a href="#pricing" class="menu__link" onclick="closeMenu()">Pricing</a>
                <a href="#contact us" class="menu__link" onclick="closeMenu()">Contact Us</a>
                <a href="#login" class="menu__link" onclick="closeMenu()">Login</a>
                <a href="#signup" class="menu__link menu__link--primary" onclick="closeMenu()">Sign Up</a>
            </div>
        </div> */