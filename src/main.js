let items = document.querySelectorAll(".slider .item")
let next = document.getElementById("next")
let prev = document.getElementById("prev")

let active = 3;
const loadShow = () => {
    let stt = 0;
    for(let i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - .2*stt})`;
    }
}
loadShow()