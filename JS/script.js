let button = document.querySelector("#btnCalculate");

button.addEventListener("click", () => {
    let tempValor = document.querySelector("input#tempvalor");
    let tempMedida = document.querySelector("select#medida");
    let resultQuadrados = document.querySelectorAll(".tempResult");

    if (!tempValor.value) {
        tempValor.style.border = "1px solid red";
        return;
    }

    resultQuadrados.forEach((element) => {
        element.style.display = "block";
    });

    tempValor.style.border = "1px solid black";

    let valor1 = document.querySelector("#tempvalor1");
    let valor2 = document.querySelector("#tempvalor2");
    let valor3 = document.querySelector("#tempvalor3");

    if (tempMedida.value == 0) {
        valor1.innerText = "Fahrenheit: " + ((parseFloat(tempValor.value) * 9) / 5 + 32).toFixed(2) + " °F";
        valor2.innerText = "Kelvin: " + (parseFloat(tempValor.value) + 273.15).toFixed(2) + " K";
        valor3.innerText = "Rankine: " + ((parseFloat(tempValor.value) * 9) / 5 + 491.67).toFixed(2) + " °R";
    } else if (tempMedida.value == 1) {
        valor1.innerText = "Celsius: " + (((parseFloat(tempValor.value) - 32) * 5) / 9).toFixed(2) + " °C";
        valor2.innerText = "Kelvin: " + (((parseFloat(tempValor.value) - 32) * 5) / 9 + 273.15).toFixed(2) + " K";
        valor3.innerText = "Rankine: " + (parseFloat(tempValor.value) + 459.67).toFixed(2) + " °R";
    } else if (tempMedida.value == 2) {
        valor1.innerText = "Celsius: " + (parseFloat(tempValor.value) - 273.15).toFixed(2) + " °C";
        valor2.innerText = "Fahrenheit: " + (((parseFloat(tempValor.value) - 273.15) * 9) / 5 + 32).toFixed(2) + " °F";
        valor3.innerText = "Rankine: " + (parseFloat(tempValor.value) * 1.8).toFixed(2) + " °R";
    } else {
        valor1.innerText = "Celsius: " + (((parseFloat(tempValor.value) - 491.67) * 5) / 9).toFixed(2) + " °C";
        valor2.innerText = "Fahrenheit: " + (parseFloat(tempValor.value) - 459.67).toFixed(2) + " °F";
        valor3.innerText = "Kelvin: " + ((parseFloat(tempValor.value) * 5) / 9).toFixed(2) + " K";
    }
});
