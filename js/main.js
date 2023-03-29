
let current = "main-section";

function changer(input) {
    if (input == 1) {
        // close current section
        document.getElementById(current).style.display = "none";
        // set current to section id
        current = "main-section";
        // open section
        document.getElementById(current).style.display = "flex";
    }

    if (input == 2) {
        document.getElementById(current).style.display = "none";
        current = "products-section";
        document.getElementById(current).style.display = "flex";
    }

    if (input == 3) {
        document.getElementById(current).style.display = "none";
        current = "requests-section";
        document.getElementById(current).style.display = "flex";
    }

    if (input == 4) {
        document.getElementById(current).style.display = "none";
        current = "classes-section";
        document.getElementById(current).style.display = "flex";
    }

    if (input == 5) {
        document.getElementById(current).style.display = "none";
        current = "about-us-section";
        document.getElementById(current).style.display = "flex";
    }


}
