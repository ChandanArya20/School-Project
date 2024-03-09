const toggleButton = document.querySelector(".toggle-botton")
const dropdownMenu = document.querySelector(".dropdown-menu")
const menuIcon = document.querySelector(".toggle-botton i");

toggleButton.addEventListener("click", () => {
    
    dropdownMenu.classList.toggle("down-menu");

    // Toggle the icon between bars and xmark
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");

    // Check if the close icon is active, and change text color accordingly
    const isCloseIcon = menuIcon.classList.contains("fa-xmark");
    toggleButton.style.color = isCloseIcon ? "red" : "black";
});