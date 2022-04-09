/* eslint-disable */
import "bootstrap";
import "./style.css";

var buttonSend = document.getElementById("send");
var buttonCancel = document.getElementById("cancel");

//BOTONES
buttonSend.addEventListener("click", validar);
buttonCancel.addEventListener("click", recargar);

//FUNCION PARA RECARGAR
function recargar() {
  location.reload();
}
//FUNCION PARA VALIDAR
function validar(evento) {
  var todoOK = true;

  //LLAMADAS
  var cardNum = document.getElementById("cardNum");
  var amount = document.getElementById("amount");
  var usuarioName = document.getElementById("name");
  var usuarioLastName = document.getElementById("lastname");
  var city = document.getElementById("city");
  var CP = document.getElementById("CP");
  var cvc = document.getElementById("cvc");

  //FAILS
  var nameFail = document.getElementById("nameFail");
  var lastNameFail = document.getElementById("lastNameFail");
  var cityFail = document.getElementById("cityFail");
  var cpFail = document.getElementById("CPfail");
  var cardFail = document.getElementById("cardFail");
  var amountFail = document.getElementById("amountFail");
  var cvcFail = document.getElementById("cvcFail");
  var tarjFail = document.getElementById("tarjFail");

  //FUNCIONES
  function colorRed(element) {
    element.style.backgroundColor = "#FADBD8";
  }
  function colorBlanco() {
    let inputs = document.querySelectorAll("input");
    for (let i of inputs) {
      i.style.backgroundColor = "white";
    }
  }
  function success() {
    var contPrincipal = document.getElementById("principal");
    var success = document.createElement("h3");
    success.className = "alert alert-success text-center";
    success.innerHTML = "¡SUCCESS! Your information has been uploaded";
    contPrincipal.appendChild(success);
  }

  //CONDICIONES

  if (usuarioName.value.length == 0) {
    colorRed(usuarioName);
    nameFail.innerHTML = "You're forgetting your name";
    todoOK = true;
  } else {
    todoOK = false;
    nameFail.innerHTML = "";
  }
  if (usuarioLastName.value.length == 0) {
    colorRed(usuarioLastName);
    lastNameFail.innerHTML = "Please write down your Last Name";
    todoOK = true;
  } else {
    todoOK = false;
    lastNameFail.innerHTML = "";
  }
  if (amount.value.length == 0) {
    colorRed(amount);
    amountFail.innerHTML = "The amount is not valid";
    todoOK = true;
  } else {
    todoOK = false;
    amountFail.innerHTML = "";
  }
  if (city.value.length == 0) {
    colorRed(city);
    cityFail.innerHTML = "The value of city is missing";
    todoOK = true;
  } else {
    todoOK = false;
    cityFail.innerHTML = "";
  }

  if (CP.value.length == 0) {
    cpFail.innerHTML = "Your postal code is not valid";
    colorRed(CP);
    todoOK = true;
  } else {
    todoOK = false;
    cpFail.innerHTML = "";
  }
  if (cardNum.value.length > 16 || cardNum.value.length < 16) {
    cardFail.innerHTML = "Card number not valid";
    colorRed(cardNum);
    todoOK = true;
  } else {
    todoOK = false;
    cardFail.innerHTML = "";
  }
  if (cvc.value.length == 0) {
    cvcFail.innerHTML = "CVC not valid";
    colorRed(cvc);
    todoOK = true;
  } else {
    todoOK = false;
    cvcFail.innerHTML = "";
  }
  if (!document.querySelector('input[name="drone"]:checked')) {
    tarjFail.innerHTML = "You must select a payment card ";
    todoOK = true;
  } else {
    todoOK = false;
    tarjFail.innerHTML = "";
  }
  if (todoOK) {
    event.preventDefault();
  } else {
    success();
    colorBlanco();
  }
}
