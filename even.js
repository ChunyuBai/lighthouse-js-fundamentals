const isEven  = function (num) {
  return num % 2 === 0;
}
const checkOdd = isEven(19);
const checkEven = isEven(20);
console.log(checkEven);//true
console.log(checkOdd);//false

console.log(isEven(19));//false
console.log(isEven(20));//true