let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) { 
    for(let key in obj) {
        return false;
    }
    return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for (let name in salaries){
    sum += salaries[name];
}

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == "number") {
            menu[key] *= 2;
        }
    }
}