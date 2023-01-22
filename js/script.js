const hamburgerButton = document.getElementById("menu-btn")
const navbar = document.querySelector(".navbar")
hamburgerButton.addEventListener("click",() =>{
    console.log("klik")
    navbar.classList.toggle('active')
})




var show = true;
document.getElementById("seeAll").addEventListener("click", function(){
  var rows = document.getElementById("postDataTable").rows;
  if (show) {
    for (var i = 4; i < rows.length; i++) {
      rows[i].style.display = "table-row";
    }
    show = false;
  } else {
    for (var i = 4; i < rows.length; i++) {
      rows[i].style.display = "none";
    }
    show = true;
  }
});