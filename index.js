console.log("JavaScript is working!");

function openMenu() {
  document.body.classList += " menu--open";
}
function closeMenu() {
  document.body.classList.remove("menu--open");
}

function updatePlaceholder() {
    const input = document.getElementById("header__email--input");
    if (window.innerWidth <= 500) { // Adjust the breakpoint as needed
        input.placeholder = "Email"; // Change to smaller placeholder
    } else {
        input.placeholder = "Your email address"; // Original placeholder
    }
}

window.onload = updatePlaceholder;
window.onresize = updatePlaceholder;