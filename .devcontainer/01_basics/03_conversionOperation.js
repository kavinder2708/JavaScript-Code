let code =33;
let newNumber= "33";
let stringNum= "123abc"


console.log(typeof code);
console.log(typeof newNumber);
// To convet the string value into Number we user numberFunction and pass the string inside this.


const convertStringInNumber= Number(newNumber);
console.log(typeof convertStringInNumber);

const converStringInNumber2= Number(stringNum);
console.log( converStringInNumber2) // o/p is NaN because every string value is not converted into number 

console.log(typeof converStringInNumber2)
// for null value it converts into 0
// boolean true/false = 1/0 

// to conver number into str=ing pass the value into String keyword. S should be in large Word.

