let items = document.querySelectorAll(".item")
let next = document.getElementById("next")
let prev = document.getElementById("prev")

let active = 3;
const loadShow = () => {
    let stt = 0;
    for(let i = active + 1; i < items.length; i++){
        console.log(i)
        stt++;
        console.log(items[i])
        items[i].style.transform = `translateX(${120*stt})`;
    }
}
loadShow()