// =====navbar toggle====

let menuBar = document.getElementById("menuBar");
let barContent = document.getElementById("barContent");
let closeBtn = document.getElementById("closeBtn");

menuBar.onclick = function () {
    barContent.style.left = '0';
    closeBtn.classList.add("closeBtnShow");
    menuBar.classList.add("menuBarClose");
}
closeBtn.onclick = function () {
    barContent.style.left = '-106%';
    closeBtn.classList.remove("closeBtnShow");
    menuBar.classList.remove("menuBarClose");
}
