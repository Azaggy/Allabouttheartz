/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav" || x.className === "dropdown") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


//   icon x switch

function myFunction2(x) {
    x.classList.toggle("change");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav" || x.className === "dropdown") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Dropdown click

/* Toggle between showing and hiding content */
function openDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//Closes dropdown when click outside of it
window.onclick = function(event) {
    if (!e.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i=0; i< dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
