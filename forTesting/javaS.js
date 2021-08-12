function changeImage() {
    let set1 = document.getElementById("tryIt")
    if (set1.style.display === "inline-block") {
        set1.style.display ="none";
    } else {
        set1.style.display ="inline-block";
    }
    let set2 = document.getElementById("tryIt2")
    if (set2.style.display === "none") {
        set2.style.display = "inline-block";
    } else {
        set2.style.display = "none";
    }

    // document.getElementById("tryIt").style.toggledisplay("none");
    // document.getElementById("tryIt2").style.toggle.display = "inline-block";
}