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
