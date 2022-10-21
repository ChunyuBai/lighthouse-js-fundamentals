let temperature = 1; //Short sleeves won't cut it!
temperature = 20; //Short sleeves are fine.
temperature = -20;   //Make sure you pick out a scarf!
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


const isCitizen = true;
const age = 26;//You are eligible to vote.

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}


temperature = -41;//Maybe going outside isn't such a great idea…
temperature = 50;//Maybe going outside isn't such a great idea…
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

raining=false;//Leave your umbrella at home!
if (!raining) {
  console.log("Leave your umbrella at home!");
}

