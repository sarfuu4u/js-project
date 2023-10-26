const clock = document.getElementById("time");
const cll = document.getElementById("date");


setInterval(function () {
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerText = date.toLocaleTimeString();
    cll.innerHTML = date.toLocaleDateString();
}, 1000);

// let date = new Date();
// cll.innerHTML = date.toLocaleDateString();