let i = 3;

while (i) {
  alert( i-- );
}
// the last alerted value is 1

let i = 0;
while (++i < 5) alert( i );
// 1, 2, 3, 4
let i = 0;
while (i++ < 5) alert( i );
// 1, 2, 3, 4, 5

for (let i = 0; i < 5; i++) alert( i );
//0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert( i );
//0, 1, 2, 3, 4

for (let i = 2; i < 11; i++){
    if (i % 2) continue;
    alert(i);
}

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

let i = 0;
while (i < 3){
    alert( `number ${i++}!` );
}

let number = prompt("Enter number greater than 100");
while (number <= 100 && num){
    number = prompt("Enter again");
}

let n = prompt("Enter n");
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) break; 
  }
  alert( i ); 
}
