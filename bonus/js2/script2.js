var nomeUtente = prompt("scrivi il tuo nome");
document.getElementById("name").innerHTML = nomeUtente;
var cognomeUtente = prompt("scrivi il tuo cognome");
document.getElementById("surname").innerHTML = cognomeUtente;
var coloreUtente = prompt("scrivi il tuo colore preferito");
document.getElementById("color").innerHTML = coloreUtente;
alert("ATTENZIONE specifica la tua età per generare la password");
var annoNascita = prompt("scrivi il tuo anno di nascita");
var anniUtente = 2021 - parseInt(annoNascita);
document.getElementById("age").innerHTML = anniUtente;
var n = 35 * 400;
var p = nomeUtente + cognomeUtente + coloreUtente + anniUtente * n;
document.getElementById("password").innerHTML = "box" + p;
document.getElementById("title-two").innerHTML = "Questa è la tua password";

