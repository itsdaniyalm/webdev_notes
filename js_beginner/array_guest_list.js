var guestList = ["Angela", "Jack", "Pam", "Lara", "Jason"];
var name = prompt("enter name:");
function welcome(name) {
    if (guestList.includes(name)) {
        return "Welcome";
    } else {
        return "Not Welcome";
    }
}

alert(welcome(name));