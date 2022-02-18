let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

function Calculator() {
    this.read() = function() {
        this.a = +prompt("a");
        this.b = +prompt("b");
    };
    this.sum() = function() {
        return this.a + this.b;
    };
    this.mul() = function() {
        return this.a * this.b;
    };
}

function Accumulator(startingValue){
    this.value = startingValue;
    this.read() = function(){
        this.value += +prompt("New value", 0);
    };
}