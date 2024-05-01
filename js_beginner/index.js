var yourName = prompt("Enter your name.");
var firstChar = yourName.slice(0,1);
var nameLength = yourName.length;
var balanceChar = yourName.slice(1,(nameLength));
alert("Hello! " + firstChar.toUpperCase() + balanceChar.toLowerCase());