function pow(x,n) //no spaces between arguments
{
  let result=1; //no spaces between elements
  for(let i=0;i<n;i++) {result*=x;} // no spaces and line breaks
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // can be divided into two lines
//no spaces, no semicolon
if (n<=0)//no spaces
{//curly brace in separate line
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}//long lines can be divided into multiple lines
else 
{ //curly brace in separate line
  alert(pow(x,n)) //no space and semicolon
}