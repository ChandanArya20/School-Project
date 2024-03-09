const toggleButton = document.querySelector(".toggle-botton")
const dropdownMenu = document.querySelector(".dropdown-menu")

toggleButton.addEventListener("click",()=>{
    dropdownMenu.classList.toggle("down-menu")
})