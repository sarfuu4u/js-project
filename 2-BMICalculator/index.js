const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results")
    const result2 = document.querySelector("#result2")

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = "Please Enter Valid Height"
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please Enter Valid Weight"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Showing the result
        result.innerHTML = `<span>${bmi}</span>`
    }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi <= 18.6) {
        result2.innerHTML= `<span>Your BMI is Under Weight</span>`
    } else if(bmi > 18.6 && bmi <24.9){
        result2.innerHTML="<span>Your BMI is in Normal Range</span>"
    }else if(bmi >= 24.9){
        result2.innerHTML="<span>Your BMI is Over Weight</span>"
    }
})