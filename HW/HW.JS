// 1
function greet(name) {
  return "Привет, " + name + "!";
}
console.log(greet("Айым"));

// 2
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));
console.log(sum(5, 7));

// 3
function showMessage() {
  alert("Функция сработала!");
}
showMessage();

// 4
document.getElementById("btn1").addEventListener("click", function () {
  alert("Кнопка нажата!");
});

// 5 
var hoverText = document.getElementById("hoverText");

hoverText.addEventListener("mouseover", function () {
  hoverText.style.color = "red";
});

hoverText.addEventListener("mouseout", function () {
  hoverText.style.color = "black";
});

// 6
var count = 0;
document.getElementById("countBtn").addEventListener("click", function () {
  count = count + 1;
  document.getElementById("count").textContent = count;
});

// 7
document.getElementById("inputText").addEventListener("input", function () {
  document.getElementById("outputText").textContent = this.value;
});

// 8
function showAlert(msg) {
  alert(msg);
}

document.getElementById("alertBtn").addEventListener("click", function () {
  showAlert("Сообщение из функции");
});

// 9
document.getElementById("colorText").addEventListener("click", function () {
  this.className = "red";
});

// 10
document.getElementById("sumBtn").addEventListener("click", function () {
  var a = Number(document.getElementById("n1").value);
  var b = Number(document.getElementById("n2").value);
  document.getElementById("sumResult").textContent = a + b;
});

// 11
function createBox(color) {
  var div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = color;
  document.body.appendChild(div);
}

document.getElementById("redBtn").addEventListener("click", function () {
  createBox("red");
});
document.getElementById("greenBtn").addEventListener("click", function () {
  createBox("green");
});
document.getElementById("blueBtn").addEventListener("click", function () {
  createBox("blue");
});

// 12
document.getElementById("list").addEventListener("click", function (event) {
  alert(event.target.textContent);
});

// 13 
var timerValue = 0;
var intervalId;

document.getElementById("startBtn").addEventListener("click", function () {
  intervalId = setInterval(function () {
    timerValue = timerValue + 1;
    document.getElementById("timer").textContent = timerValue;
  }, 1000);
});

document.getElementById("stopBtn").addEventListener("click", function () {
  clearInterval(intervalId);
});

// 14
document.getElementById("sendBtn").addEventListener("click", function () {
  var email = document.getElementById("email").value;

  if (email.indexOf("@") === -1) {
    alert("Ошибка: нет символа @");
  } else {
    alert("Email принят");
  }
});

// 15
var secret = Math.floor(Math.random() * 10) + 1;
var attempts = 0;

document.getElementById("guessBtn").addEventListener("click", function () {
  var userNumber = Number(document.getElementById("guessInput").value);
  attempts = attempts + 1;

  if (userNumber < secret) {
    document.getElementById("hint").textContent = "Больше";
  } else if (userNumber > secret) {
    document.getElementById("hint").textContent = "Меньше";
  } else {
    document.getElementById("hint").textContent =
      "Угадал! Попыток: " + attempts;
  }
});
