function randomColor() {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

document.querySelector('#start').addEventListener('click', changeBgColor);
document.querySelector('#stop').addEventListener('click', stopBgColor);

let intervalId;

function changeBgColor(){
    intervalId = setInterval(function(){
        document.body.style.backgroundColor=randomColor();
    }, 1000)
}
function stopBgColor(){
    clearInterval(intervalId)
}