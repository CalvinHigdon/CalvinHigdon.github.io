function changePoemHTML(buttonID) {
    var button = document.getElementById(buttonID);
    var poemTitle = button.getElementsByClassName("poetry-title")[0];
    var blurb = button.getElementsByClassName("poetry-text")[0];
    var poemFull = button.getElementsByClassName("poetry-full")[0];
    var arrows = button.getElementsByClassName("arrow")

    if (button.classList.contains("selectedButton")) { // If the button is already selected
        button.classList.remove("selectedButton");
        blurb.style.display = "flex";
        poemFull.style.display = "none";
        for (var i = 0; i < arrows.length; i++) {
            arrows[i].innerHTML = "&#11167";
            arrows[i].classList.remove("arrowOpen");
        }
        button.setAttribute("style", "height: 7rem");
    } else { // If the button is not selected
        button.classList.add("selectedButton");
        blurb.style.display = "none";
        poemFull.style.display = "flex";
        for (var i = 0; i < arrows.length; i++) {
            arrows[i].classList.add("arrowOpen");
        }
        button.setAttribute("style", "height: " + (poemTitle.clientHeight + poemFull.clientHeight + 15) + "px");
    }
}

function hoverButton(buttonID) {
    var button = document.getElementById(buttonID);
    var arrows = button.getElementsByClassName("arrow")

    for (var i = 0; i < arrows.length; i++) {
        if (arrows[i].classList.contains("hoverArrow"))
            arrows[i].classList.remove("hoverArrow");
        else
            arrows[i].classList.add("hoverArrow");
    }
}