alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // outputs 1, then 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // outputs 1, then undefined
alert( null || 2 && 3 || 4 ); // 3

let age = prompt("Enter your age")
if (age >= 14 && age <= 90){
    alert("Yes!")
}

if (age < 14 || age > 90){
    alert("Yes!")
}

if (!(age >= 14 && age <= 90)){
    alert("Yes!")
}

if (-1 || 0) alert( 'first' ); // executed
if (-1 && 0) alert( 'second' ); // not executed, the result in if is 0
if (null || -1 && 1) alert( 'third' ); // executed, the result in if is 1

let visitorName = prompt("Who's there?");
if (visitorName == "Admin"){
    let enteredPassword = prompt("Password");
    if (enteredPassword == "TheMaster"){
        alert("Welcome!");
    }
    else if (enteredPassword == "" || enteredPassword === null){
        alert("Canceled");
    }
    else {
        alert("Wrong password");
    }
}
else if (visitorName == "" || visitorName === null){
    alert("Canceled");
}
else {
    alert("I don't know you");
}