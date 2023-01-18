
const hamburgerButton = document.getElementById("menu-btn")
const navbar = document.querySelector(".navbar")
hamburgerButton.addEventListener("click",() =>{
    console.log("klik")
    navbar.classList.toggle('active')
})
