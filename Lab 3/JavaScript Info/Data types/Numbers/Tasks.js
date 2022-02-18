let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert( a + b );

function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
alert(`Read: ${readNumber()}`);

let i = 0;
while (i != 10) {
  i += 0.2;
}
//i will never equal 10

function random(min, max) {
    return min + Math.random() * (max - min);
  }

function randomInteger(min, max) {
// now rand is from  (min-0.5) to (max+0.5)
let rand = min - 0.5 + Math.random() * (max - min + 1);
return Math.round(rand);
}
  
alert( randomInteger(1, 3) );