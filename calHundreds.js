const howManyHundreds = (num) => {
  const remainder = num%100;
  return (num - remainder) / 100;
}

console.log(howManyHundreds(1234));
console.log(howManyHundreds(0));
console.log(howManyHundreds(55));
console.log(howManyHundreds(100));
console.log(howManyHundreds(200));
console.log(howManyHundreds(123456));