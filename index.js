const surpriseButton = document.querySelector("#surprise-button");
const p1Button = document.querySelector("#playerName-button");
const clickingNoise = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const input = document.querySelector("input");
console.log(input);

//* Creating theme selection to coincide with surprise me button

surpriseButton.addEventListener("click", function (e) {
  clickingNoise.play();
  let randomNum = Math.floor(Math.random() * 4);
  if (randomNum === 0) {
    e.target.innerHTML = "Holiday Edition";
  } else if (randomNum === 1) {
    e.target.innerHTML = "Food Edition";
  } else if (randomNum === 2) {
    e.target.innerHTML = "General Theme Edition";
  }
});

//0 = Holiday Edition
//1 = Food Edition
//2 = General Theme Edition

p1Button.addEventListener("click", function (e) {
  clickingNoise.play();
  const li = document.createElement("li");
  li.textContent = `Welcome Player: ${input.value.toUpperCase()}`;
  document.querySelector("ol").appendChild(li);
  input.value = "";
});

//* Themes

let foodTheme = [
  "anise",
  "curry",
  "dairy",
  "dates",
  "dough",
  "drink",
  "feast",
  "flour",
  "fried",
  "fruit",
  "guava",
  "herbs",
  "honey",
  "icing",
  "jelly",
  "juice",
  "lemon",
  "maize",
  "mango",
  "melon",
  "pizza",
  "olive",
  "onion",
  "pasta",
  "peach",
  "pecan ",
  "syrup",
  "thyme",
  "toast",
  "apple",
];
let holidayTheme = [
  "carol",
  "snowy",
  "druid",
  "elves",
  "holly",
  "jolly",
  "peace",
  "music",
  "bells",
  "cards",
  "arbor",
  "labor",
  "candy",
  "hymns",
  "cupid",
  "gnome",
  "claus",
  "movie",
  "vixen",
  "santa",
  "roses",
  "heart",
  "lucky",
  "clove",
  "july",
  "birth",
  "eagle",
  "rabbi",
  "earth",
  "cacao",
];
let generalTheme = [
  "cabby",
  "babes",
  "early",
  "eager",
  "fable",
  "gable",
  "habit",
  "jacks",
  "macaw",
  "pacer",
  "packs",
  "rabid",
  "sabre",
  "tables",
  "tabby",
  "udder",
  "vague",
  "wacky",
  "waded",
  "yacks",
  "cadet",
  "imply",
  "index",
  "indie",
  "abhor",
  "ideas",
  "icons",
  "inbox",
  "genes",
  "gears",
];

console.log(foodTheme.length); //30
console.log(holidayTheme.length); //30
console.log(generalTheme.length); //30

//* Arrays
const numOfGuesses = 4;
let remainingGuess = numOfGuesses;
let currentGuess = [];
let nextLetter = 0;

let correctFoodGuess = foodTheme[Math.floor(Math.random() * foodTheme.length)];
let correctHolidayGuess =
  holidayTheme[Math.floor(Math.random() * holidayTheme.length)];
let correctGeneralGuess =
  generalTheme[Math.floor(Math.random() * generalTheme.length)];
console.log(correctFoodGuess);
console.log(correctHolidayGuess);
console.log(correctGeneralGuess);

const body = document.querySelector("body");
console.log(body);

//* Building the boards
function firstBoard() {
  firstBoard = document.querySelector("#firstBoard");
  for (let i = 0; i < numOfGuesses; i++) {
    let rowDiv1 = document.createElement("div");
    rowDiv1.className = "tile-row1";

    for (let j = 0; j < 5; j++) {
      let boxDiv1 = document.createElement("div");
      boxDiv1.className = "tile-box1";
      rowDiv1.append(boxDiv1);
    }
    firstBoard.append(rowDiv1);
  }
}

firstBoard();

//can add things in as well
//can use api's

function secondBoard() {
  secondBoard = document.querySelector("#secondBoard");
  for (let i = 0; i < numOfGuesses; i++) {
    let rowDiv2 = document.createElement("div");
    rowDiv2.className = "tile-row2";

    for (let j = 0; j < 5; j++) {
      let boxDiv2 = document.createElement("div");
      boxDiv2.className = "tile-box2";
      rowDiv2.append(boxDiv2);
    }
    secondBoard.append(rowDiv2);
  }
}

secondBoard();

//* KeyBoard

//*This function captures what i write on my keyboard
//*Gotta find how to append to the div
document.addEventListener("keypress", function (e) {
  const selectedKey = e.key.toLowerCase();
  const isLetter = selectedKey >= "a" && selectedKey <= "z";
  if (remainingGuess === 0) {
    return;
  }
  if (isLetter) {
    console.log(selectedKey);
  } else if (selectedKey === "backspace" && nextLetter !== 0) {
    deleteLetter();
    return;
  }

  if (selectedKey === "enter") {
    checkGuess();
    return;
  }

  let correct = selectedKey.match(/[a-z]/gi);
  //  (/[a-z]/gi) matches if only a single character is alphabetic.
  if (!correct || correct.length > 1) {
    return;
  } else {
    insertLetter(selectedKey);
  }
});

//*This event will click on screen only the letters //this works
document.addEventListener("click", function (e) {
  const selectedKey = e.target.innerHTML;
  const isLetter = selectedKey >= "a" && selectedKey <= "z";
  if (remainingGuess === 0) {
    return;
  }
  if (isLetter) {
    console.log(selectedKey);
  } else if (selectedKey === "backspace" && nextLetter != 0) {
    deleteLetter();
    return;
  } else {
    e.preventDefault();
    return;
  }
  if (selectedKey === "enter") {
    checkGuess();
    return;
  }

  if (selectedKey === "funny noise") {
    funnyNoise();
    return;
  }

  let correct = selectedKey.match(/[a-z]/gi);
  if (!correct || correct.length > 1) {
    return;
  } else {
    insertLetter(selectedKey);
  }
});

//* Functions

/* <div id= "Boards">
<div id="board1andkey">
  <div id="firstBoard"></div>
  <!-- Board that we made using DOM manipulation -->
  <div class="keyboard1">
    <div id="first-row"> */

function insertLetter(selectedKey) {
  let targetTile2 = document.querySelector(".tile-box2");
  console.log(targetTile2);
  let targetRow2 = document.querySelector(".tile-row2");
  if (nextLetter === 5) {
    alert("Nice try!");
    return;
  }

  
  let letter = targetRow2.children[nextLetter];
  letter.textContent = selectedKey;
  letter.classList = "filled-box";
  currentGuess.push(selectedKey);
  nextLetter += 1;
}



function checkGuess() {}
function funnyNoise() {
  clickingNoise.play();
}
function deleteLetter() {}
