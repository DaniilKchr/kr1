document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  let amount = document.getElementById('amount').value;
  
  if (amount % 2 !== 0) {
  document.getElementById('result').innerText = "Невозможно разменять. Введите четную сумму.";
  } else {
  let bills500 = Math.floor(amount / 500);
  amount = amount % 500;
  let bills100 = Math.floor(amount / 100);
  amount = amount % 100;
  let bills10 = Math.floor(amount / 10);
  amount = amount % 10;
  let coins2 = amount / 2;
  document.getElementById('bills500').innerText = bills500;
  document.getElementById('bills100').innerText = bills100;
  document.getElementById('bills10').innerText = bills10;
  document.getElementById('coins2').innerText = coins2;
  document.getElementById('result').innerText = "Размен прошел успешно.";
  }
  });
  

var messageText = document.getElementById("result").innerText;
var messageText = document.getElementById("bills500").innerText;
var messageText = document.getElementById("bills100").innerText;
var messageText = document.getElementById("bills10").innerText;
var messageText = document.getElementById("coins2").innerText;
var result;
var check = true;
const constVerify = document.getElementById("verify");
constVerify.onclick = verify;
const constSend = document.getElementById("send");
constSend.onclick =send;