// definisikan 3 variable untuk menyimpan 2 angka dan 1 operator
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

// membuat agar layar dapat menampilkan angka yang benar menggunakan method querySelector
const calculatorScreen = document.querySelector(".calculator-screen");
function updateScreen(number) {
  // memperbarui nilai
  calculatorScreen.value = number;
}

// mengambil element class number menggunakan method querySelectorAll
const numbers = document.querySelectorAll(".number");
numbers.forEach(function (number) {
  //untuk mengeksekusi fungsi disetiap element number
  number.addEventListener("click", function (event) {
    // tambahkan click event untuk mendeteksi jika button diklik
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

// definisikan function “inputNumber”
function inputNumber(number) {
  if (currentNumber === "0") {
    // kondisi if else agar inputNumber tidak diawali dengan 0
    currentNumber = number;
  } else {
    currentNumber += number;
  }
}

const operators = document.querySelectorAll(".operator");
operators.forEach(function (operator) {
  operator.addEventListener("click", function (event) {
    inputOperator(event.target.value);
  });
});

// definisikan function “inputOperator”
function inputOperator(operator) {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
}

// mengambil element class equal-sign menggunakan querySelector
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", function () {
  calculate(); // Jalankan Function calculate saat = diclick
  updateScreen(currentNumber);
});

// definisikan function calculate
function calculate() {
  let result = ""; // buat local var result
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber); //konvert non float to float(decimal)
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
}

// Definisikan function “clearAll”
function clearAll() {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
}

// mengambil element class all-claer menggunakan querySelector
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", function () {
  clearAll(); // Jalankan Function clearAll saat tombol AC diclick
  updateScreen(currentNumber);
});

// mengambil element class decimal menggunakan querySelector
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", function (event) {
  // tambahkan click event
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

// Definisikan function inputDecimal
inputDecimal = function (dot) {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

// mengambil element class percentage menggunakan querySelector
const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", function (event) {
  inputPercentage(event.target.value);
  updateScreen(currentNumber);
});

// Definisikan function inputPercentage
inputPercentage = function (percentage) {
  if (currentNumber.includes("%")) {
    return;
  }
  currentNumber = currentNumber / 100;
};
