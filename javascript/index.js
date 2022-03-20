const myText = "Bing bong mother fucka";
const newString = myText.replace("mother fucka", "fuck ya life");

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);

const myNumber = 5;

console.log(myNumber);

function random(number) {
  return Math.floor(Math.random() * number);
}

const a = function getRandom() {
  return Math.random();
};

// Function min(a,b)//
function min(a, b) {
  const min = a > b ? b : a;
  return min;
}

min(6, 5);
min(10, 9);

console.log(min(8, 9));

// Function pow(x,n) //
function pow(x, n) {
  return x ^ n;
}

function sayHi() {
  alert("Hello");
}

//Fundamentals Part 3 Practice Problems//
function add7(n) {
  const num = n + 7;
  console.log(num);
}

function multiply(a, b) {
  console.log(a * b);
}

function capitalize(string) {
  console.log(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
}

function lastLetter(string) {
  console.log(string.slice(-1));
}
