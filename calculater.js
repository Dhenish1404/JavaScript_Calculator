const input = document.getElementById('output');
let changeFunctionValue = true;

function addData(number) {
    input.value += number;
}

// Memory Store and it's some Modification
function memoryStore() {
    localStorage.setItem("calculaterValue", input.value);
}

function memoryClear() {
    localStorage.removeItem("calculaterValue");
}

function memoryReturn() {
    input.value = input.value + localStorage.getItem("calculaterValue");
}

function addMemoryValue() {
    let data = parseInt(localStorage.getItem('calculaterValue')) + eval(input.value);
    localStorage.setItem("calculaterValue", data);
}

function minusMemoryValue(){
    let data = parseInt(localStorage.getItem('calculaterValue')) - eval(input.value);
    localStorage.setItem("calculaterValue", data);
}

// Convert the value into Degree
function calculateDegree(value) {
    let degree = (Math.PI / 180) * value;
    return degree;
}

// Trigonometry Functions
document.getElementById("trigonometry").addEventListener("change", (event) => {
    let value = event.target.value
    if (value == 'sin') {
        input.value = Math.sin(calculateDegree(eval(input.value)))
    } else if (value == "cos") {
        input.value = Math.cos(calculateDegree(eval(input.value)));
    } else if (value == "tan") {
        input.value = Math.tan(calculateDegree(eval(input.value)))
    } else if (value == 'sec') {
        input.value = Math.sinh(calculateDegree(eval(input.value)))
    } else if (value == "cosec") {
        input.value = Math.cosh(calculateDegree(eval(input.value)));
    } else if (value == "cot") {
        input.value = Math.tanh(calculateDegree(eval(input.value)))
    }
    document.getElementById('trigonometry').selectedIndex = 0;
})

// Some other Math Funcations
document.getElementById("function").addEventListener("change", (event) => {
    let value = event.target.value
    if (value == 'random') {
        input.value = Math.random(input.value);
    } else if (value == "floor") {
        input.value = Math.floor(input.value);
    } else if (value == "ceil") {
        input.value = Math.ceil(input.value)
    }
    document.getElementById('function').selectedIndex = 0;
})
document.getElementById('cube').style.display = "none";
document.getElementById('cubeRoot').style.display = "none";
document.getElementById('twosSqure').style.display = "none";
document.getElementById('twosLog').style.display = "none";
document.getElementById('twosLn').style.display = "none";

function changeFunctionSecond() {
    document.getElementById('secondBtn').innerHTML = "1 <sup>st</sup>";
    document.getElementById('squre').style.display = "none";
    document.getElementById('cube').style.display = "inline-block";
    document.getElementById('squareRoot').style.display = "none";
    document.getElementById('cubeRoot').style.display = "inline-block";
    document.getElementById('tensSqure').style.display = "none";
    document.getElementById('twosSqure').style.display = "inline-block";
    document.getElementById('tensLog').style.display = "none";
    document.getElementById('twosLog').style.display = "inline-block";
    document.getElementById('tensLn').style.display = "none";
    document.getElementById('twosLn').style.display = "inline-block";
}


function pi() {
    input.value = input.value + Math.PI
}

function e() {
    input.value = input.value + Math.E
}

// Clear all input data
function cleardata() {
    input.value = "";
}

// Remove one digits Into Input value
function backspace() {
    let string = "";
    string = input.value.slice(0, input.value.length - 1);
    document.querySelector('input').value = string;
}

function squre() {
    input.value = Math.pow(input.value, 2);
}

function cube() {
    input.value = Math.pow(input.value, 3);
}

function devidedByOne() {
    input.value = Math.pow(eval(input.value), -1);
}

function absolute() {
    input.value = Math.abs(input.value);
}

function exp() {
    input.value = Math.exp(eval(input.value));
}

function squareRoot() {
    input.value = Math.sqrt(input.value);
}
function cubeRoot() {
    input.value = Math.cbrt(input.value);
}

// Factorial Function
function factorial() {
    let fact = 1;
    for (var i = 1; i <= input.value; i++) {
        fact = fact * i;
    }
    input.value = fact;
}

// It's return X squre of Y like x<sup>y</sup>
function squreofSqure() {
    let string = "";
    let a = prompt("First Value");
    let b = prompt('Second Value');
    string = (a) ** (b);
    document.querySelector('input').value = string;
}

// It return 10<sup>x</sup>
function tensMultiply() {
    input.value = Math.pow(10, input.value);
}

function twosMultiply() {
    input.value = Math.pow(2, input.value);
}

function logarithmOfTen() {
    input.value = Math.log10(input.value);
}

function logarithmOfTwo() {
    input.value = Math.log2(input.value);

}

function ln() {
    input.value = Math.LN10(input.value);
}

function ln2() {
    input.value = Math.LN2(input.value);
}

function equal() {
    input.value = eval(input.value);
}

// It is convert the Negative Number to Positive Number
function changeSign() {
    let sign = input.value.substring(0, 1);
    if (sign == '+' || sign == '-') {
        input.value = input.value.substring(1);
    } else {
        input.value = '-' + input.value;
    }
}