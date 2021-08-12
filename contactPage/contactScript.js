// DarkMode
function toggleDark() {
    let element = document.body;
    element.classList.toggle("darkmode")
  changeImage();
  console.log("OKAY");
   
  // document.getElementById("social").style.display.toggle("fast");
}

// let set1 = document.getElementById("social")
// let set2 = document.getElementById("socialDark")
// set1.style.display = "block";
// set2.style.display = "none";
function changeImage() {
  let set1 = document.getElementById("social");
    let set2 = document.getElementById("socialDark");
    
    if (set1.style.display === "block" && set2.style.display === "none") {
      set1.style.display = "none";
      set2.style.display = "block";
      console.log("Test 1");
    } else if (set1.style.display === "none" && set2.style.display === "block") {
      set1.style.display = "block";
      set2.style.display = "none";
      console.log("Test 2");
    }
}

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
