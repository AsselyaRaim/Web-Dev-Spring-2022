function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
// else is not necessary

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b){
    (a > b) ? b : a;
}


let x = prompt("x");
let n = prompt("n");

function pow(x, n){
    return x ** n;
}

if (n < 1) {
    alert(`Use a positive integer`);
  } else {
    alert( pow(x, n) );
}