// console.log("Sarfraj Ahmad");

const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

// console.log(buttons);
// console.log(body);

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === "Grey") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "Blue") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "Green") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "Yellow") {
            body.style.backgroundColor = e.target.id;
        }
    });

});