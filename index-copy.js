let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);


//require the module and use the exported value
const math= require('./math.js');
console.log(math);

let result = math.subtract(num1,num2);

console.log(` ${num1} minus  ${num2} is  ${result}`);
console.log(`let divide the 2 numbers:`, math.divide(num1,num2));//output:5