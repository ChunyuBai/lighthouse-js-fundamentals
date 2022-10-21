/*const chorus = "Let's dance!";
let repeat = 0;
repeat=7; //change loop times 
while (repeat < 10 ) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

Let's dance!
Let's dance!
Let's dance!
Until the sun comes up!*/

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 5) {
  if (repeat === 3) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
/*Let's dance!
Let's dance!
Let's dance!
*change key*
Let's dance!
Let's dance!
Until the sun comes up!*/