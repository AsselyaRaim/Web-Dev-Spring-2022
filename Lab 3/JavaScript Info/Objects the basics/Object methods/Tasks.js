function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // an error

  let calculator = {
        a: null,
        b: null,
        read() {
            this.a = +prompt("Enter a");
            this.b = +prompt("Enter b")
        },
        sum() {
            return this.a + this.b;
        },
        mul(){
            return this.a * this.b;
        }
  };

  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { 
      alert( this.step );
      return this;
    }
  };