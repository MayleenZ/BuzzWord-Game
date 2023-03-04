const surpriseButton1 = document.querySelector("#surprise-button1");
const surpriseButton2 = document.querySelector("#surprise-button2");
const p1Button = document.querySelector("#playerName-button");
const clickingNoise = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const evilLaugh = new Audio("https://www.fesliyanstudios.com/play-mp3/3976");
const booSound = new Audio("https://www.fesliyanstudios.com/play-mp3/4221");
const input = document.querySelector("input");
console.log(input);
let randomNum1;
let randomNum2;
// let array1;
// let array2;
let theme1;
let theme2;
let rightGuess1;
let rightGuess2;


/*
have an array with the players name, 
if empty array
    grey out the surprise button and the keyboard
if array length === 1
    grey out the player 2 surprise button/keyboard and then in the check guess function add logic, that checks that player2 guess is not exhausted, 
        if exhausted and lost then player 1 lost too
(dont have to add this logic to array stuff)
but if array length === 2
    add logic to check guess2 that if player 1 has exhausted etc
*/

//* Creating theme selection to coincide with surprise me button; using random
surpriseButton1.addEventListener("click", function (e) {
  clickingNoise.play();
  randomNum1 = Math.floor(Math.random() * 3);
  if (randomNum1 === 0) {
    e.target.innerHTML = "Food Edition"; //0
    theme1 = "Food Edition"
  } else if (randomNum1 === 1) {
    e.target.innerHTML = "Holiday Edition"; //1
    theme1 = "Holiday Edition"
  } else if (randomNum1 === 2) {
    e.target.innerHTML = "General Theme Edition"; //2
    theme1 = "General Theme Edition"
  }
//   array1 = allWords[randomNum1];
  console.log('theme1 first', theme1);
  if (theme1 === "Food Edition"){
    rightGuess1 = foodTheme[Math.floor(Math.random() * foodTheme.length)];
 } else if (theme1 === "Holiday Edition"){
    rightGuess1 = holidayTheme[Math.floor(Math.random() * holidayTheme.length)];
 } else if (theme1 === "General Theme Edition"){
    rightGuess1 = generalTheme[Math.floor(Math.random() * generalTheme.length)];
 } 
    console.log("player1 answer: ", rightGuess1);
  //using randomNum to access array we are going to use; using same randomNum to pick category
//   console.log('firstplayer array', array1);
  return rightGuess1
});
console.log("player1 answer: ", rightGuess1);


//* Maybe now i just need a function that calls the individual themes

surpriseButton2.addEventListener("click", function (e) {
  clickingNoise.play();
  randomNum2 = Math.floor(Math.random() * 3);
  if (randomNum2 === 0) {
    e.target.innerHTML = "Food Edition"; //0
    theme2 = "Food Edition";
  } else if (randomNum2 === 1) {
    e.target.innerHTML = "Holiday Edition"; //1
    theme2 = "Holiday Edition";
  } else if (randomNum2 === 2) {
    e.target.innerHTML = "General Theme Edition"; //2
    theme2 = "General Theme Edition";
  }
//   array1 = allWords[randomNum1];
  console.log('theme2 first', theme2);
  if (theme2 === "Food Edition"){
    rightGuess2 = foodTheme[Math.floor(Math.random() * foodTheme.length)];
 } else if (theme2 === "Holiday Edition"){
    rightGuess2 = holidayTheme[Math.floor(Math.random() * holidayTheme.length)];
 } else if (theme2 === "General Theme Edition"){
    rightGuess2 = generalTheme[Math.floor(Math.random() * generalTheme.length)];
 } 
    console.log("first player2 answer: ", rightGuess2);
  //using randomNum to access array we are going to use; using same randomNum to pick category
//   console.log('secondPlayer array', array2);
  return rightGuess2
});
console.log("second player2 answer: ", rightGuess2);

//* Adds player names to document
p1Button.addEventListener("click", function (e) {
  clickingNoise.play();
  const li = document.createElement("li");
  li.textContent = `Welcome Player: ${input.value.toUpperCase()}`;
  document.querySelector("ol").appendChild(li);
  input.value = "";
});

//* Themes
//*For loop to double check if each word has five letters
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
  "table",
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

let allWords = [];
// console.log(foodTheme);
// console.log(holidayTheme);
// console.log(generalTheme);

allWords.push(foodTheme);
allWords.push(holidayTheme);
allWords.push(generalTheme);
console.log('all words array', allWords);

////////////////* Declaring variables

///* Targeting keyboard1
let numOfGuesses1 = 4;
let remainingGuess1 = numOfGuesses1;
let currentGuess1 = [];
let nextLetter1 = 0;


///* Targeting keyboard2
let numOfGuesses2 = 4;
let remainingGuess2 = numOfGuesses2;
let currentGuess2 = []; //user's current guess array we will push by each selected Key
let nextLetter2 = 0;


// let correctFoodString2 =
//   foodTheme[Math.floor(Math.random() * foodTheme.length)];
// let correctHolidayString2 =
//   holidayTheme[Math.floor(Math.random() * holidayTheme.length)];
// let correctGeneralString2 =
//   generalTheme[Math.floor(Math.random() * generalTheme.length)];
//* Keyboard 2 rightGuessString
// console.log(correctFoodString2);
// console.log(correctHolidayString2);
// console.log(correctGeneralString2);

//* Building the boards
function firstBoard() {
  firstBoard = document.querySelector("#firstBoard");
  for (let i = 0; i < numOfGuesses1; i++) {
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

function secondBoard() {
  secondBoard = document.querySelector("#secondBoard");
  for (let i = 0; i < numOfGuesses2; i++) {
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

//* KeyBoards
const keyboard1 = document.querySelector(".keyboard1"); //using var
const board1 = document.querySelector("#firstBoard");
const boardandkey1 = document.querySelector("#board1andkey");
// console.log(keyboard1);
// console.log(board1);
// console.log(boardandkey1);

const keyboard2 = document.querySelector(".keyboard2"); //using var
const board2 = document.querySelector("#secondBoard");
const boardandkey2 = document.querySelector("#board2andkey");
// console.log(keyboard2);
// console.log(board2);
// console.log(boardandkey2);


//*This event will click on screen only the letters //this works

keyboard1.addEventListener("click", function (e) {
  let selectedKey = e.target.innerHTML;
  let isLetter1 = selectedKey >= "a" && selectedKey <= "z";
  if (remainingGuess1 === 0) {
    return;
  }
  //   if (isLetter1) {
  //     console.log(selectedKey);
  //   }

  if (selectedKey === "backspace" && nextLetter1 != 0) {
    deleteLetter1();
    return;
  }

  if (selectedKey === "enter") {
    checkGuess1();
    return;
  }

  if (selectedKey === "buzz word") {
    evilLaugh.play();
    return;
  }

  let correct = selectedKey.match(/[a-z]/gi);
  if (!correct || correct.length > 1) {
    return;
  } else {
    insertLetter1(selectedKey);
  }
});

keyboard2.addEventListener("click", function (e) {
  let selectedKey = e.target.innerHTML;
  let isLetter2 = selectedKey >= "a" && selectedKey <= "z";
  if (remainingGuess2 === 0) {
    return;
  }
//   if (isLetter2) {
//     console.log(selectedKey);
//   }

  if (selectedKey === "backspace" && nextLetter2 != 0) {
    deleteLetter2();
    return;
  }

  if (selectedKey === "enter") {
    checkGuess2();
    return;
  }

  if (selectedKey === "buzz word") {
    booSound.play();
    return;
  }

  let correct = selectedKey.match(/[a-z]/gi);
  if (!correct || correct.length > 1) {
    return;
  } else {
    insertLetter2(selectedKey);
  }
});

//* Functions

//* Keyboards are built and called separately


function insertLetter1(selectedKey) {
  if (nextLetter1 === 5) {
    return;
  }

  //   let targetRow1 = document.querySelector(".tile-row1")
  let targetRow1 =
    document.getElementsByClassName("tile-row1")[4 - remainingGuess1];
  console.dir(targetRow1); //undefined bc nothing in there
  //   console.log(targetRow1.children); //the tile boxes
  let boxDiv1 = targetRow1.children[nextLetter1];
  boxDiv1.textContent = selectedKey;
  boxDiv1.classList.add("filled-box");
  currentGuess1.push(selectedKey);
  nextLetter1 += 1;
}



function insertLetter2(selectedKey) {
  if (nextLetter2 === 5) {
    return;
  }

  let targetRow2 =
    document.getElementsByClassName("tile-row2")[4 - remainingGuess2];
  // [4 - remainingGuess2];

  let boxDiv2 = targetRow2.children[nextLetter2];
  boxDiv2.textContent = selectedKey;
  boxDiv2.classList.add("filled-box");
  currentGuess2.push(selectedKey);
  console.log(currentGuess2);
  nextLetter2 += 1;
}


//* Rest of functions

//* Delete letter Function
function deleteLetter1() {
  //row = targetrow  box = letter1
  let targetRow1 = document.getElementsByClassName("tile-row1")[4 - remainingGuess1];
  let boxDiv1 = targetRow1.children[nextLetter1 - 1];
  console.log(nextLetter1);
  boxDiv1.textContent = "";
  boxDiv1.classList.remove("filled-box");
  currentGuess1.pop();
  nextLetter1 -= 1;
}

function deleteLetter2() {
  //row = targetrow  box = letter2
  let targetRow2 = document.getElementsByClassName("tile-row2")[4 - remainingGuess2];
  let boxDiv2 = targetRow2.children[nextLetter2 - 1];
  console.log(nextLetter2);
  boxDiv2.textContent = "";
  boxDiv2.classList.remove("filled-box");
  currentGuess2.pop();
  nextLetter2 -= 1;
}

// array1 = allWords[randomNum1]
//using randomNum to access array we are going to use; using same randomNum to pick category
//  console.log(array1);

//* This function passes if array1 is either Holiday, Food or General

function checkGuess1() {
  //checkGuess - for all of the arrays
  let targetRow1 = document.querySelectorAll(".tile-row1")[4 - remainingGuess1];
  //the bracket will use the remaining guess which is each row within the grid
  let guessString = "";
  //   let guessString = currentGuess1[0]


  for (const eachVal of currentGuess1) {
    guessString += eachVal;
    //concatenating each value to the guess string
  }
  console.log(guessString);
  if (guessString.length != 5) {
    alert("Not enough words! Silly Fool - BuzzWord");
    return;
  }

  //   if (!array1.includes(guessString)) {
  //     alert("Word not in the list Mortal");
  //     return;
  //   }
//only if letters exist - in future, would like to make array check if its a real word maybe dictionary api, better for user experience bc i have small data set from the arrays only 30. 


  for (let eachLetter = 0; eachLetter < 5; eachLetter++) {
    let letterColor = "";
    let box = targetRow1.children[eachLetter];
    let letter = currentGuess1[eachLetter];
    console.log(currentGuess1);
    console.log(box);

    let letterPosition = rightGuess1.indexOf(currentGuess1[eachLetter]);
    //if letter is in the right position , color it accordingly
    console.log(currentGuess1[eachLetter]);
    console.log(rightGuess1[eachLetter]);

    if (letterPosition === -1) {
      letterColor = "gray";
    } else {
      if (currentGuess1[eachLetter] === rightGuess1[eachLetter]) {
        //Position within the array of correctArray and each letter
        letterColor = "green";
      } else {
        letterColor = "yellow";
      }
      console.log('in check function, p1 answer', rightGuess1);
      console.log(guessString);
    }

    let delay = 250 * eachLetter;
    setTimeout(() => {
      box.style.backgroundColor = letterColor;
      shadeKeyBoard1(letter, letterColor);
    }, delay);
  }
  if (guessString === rightGuess1) {
    alert("You won the game..this time");
    remainingGuess1 = 0;
    return;
  } else {
    remainingGuess1 -= 1;
    currentGuess1 = [];
    nextLetter1 = 0;

    if (remainingGuess1 === 0) {
        alert("Game over, you lost!");
        alert(`The correct word was ${rightGuess1}`);
      }
    }
  }


function checkGuess2() {
  //checkGuess - for all of the arrays
  let targetRow2 = document.querySelectorAll(".tile-row2")[4 - remainingGuess2];
  //the bracket will use the remaining guess which is each row within the grid
  let guessString = "";


  for (const eachVal of currentGuess2) {
    guessString += eachVal;
    //concatenating each value to the guess string
  }
  console.log(guessString);
  if (guessString.length != 5) {
    alert("Not enough words! Silly Fool - BuzzWord");
    return;
  }

//   if (array2 != (guessString)) {
//     alert("Word not in the list Mortal");
//     return;
//   }

//   for (each of allWords){
//     console.log(each);
//     if (each != guessString)
//     alert("Word not in the list Mortal");
//     return;
//   }

  for (let eachLetter = 0; eachLetter < 5; eachLetter++) {
    let letterColor = "";
    let box = targetRow2.children[eachLetter];
    let letter = currentGuess2[eachLetter];
    console.log(currentGuess2);
    console.log(box);

    let letterPosition = rightGuess2.indexOf(currentGuess2[eachLetter]);
    //if letter is in the right position , color it accordingly
    console.log(currentGuess2[eachLetter]);
    console.log(rightGuess2[eachLetter]);

    if (letterPosition === -1) {
      letterColor = "gray";
    } else {
      if (currentGuess2[eachLetter] === rightGuess2[eachLetter]) {
        //Position within the array of correctArray and each letter
        letterColor = "green";
      } else {
        letterColor = "yellow";
      }
      rightGuess2[letterPosition] = "#";
      console.log(rightGuess2);
      console.log(guessString);
    }

    let delay = 250 * eachLetter;
    setTimeout(() => {
      box.style.backgroundColor = letterColor;
      shadeKeyBoard2(letter, letterColor);
    }, delay);
  }

  if (guessString === rightGuess2) {
    alert("You won the game..this time");
    remainingGuess2 = 0;
    return;
  } else {
    remainingGuess2 -= 1;
    currentGuess2 = [];
    nextLetter2 = 0;

    if (remainingGuess2 === 0) {
      alert("Game over, you lost!");
       alert(`The correct word was ${rightGuess2}`);
    }
  }
}

//   let letter= currentGuess2[eachLetter];

function shadeKeyBoard1(letter, color) {
  for (const el of document.getElementsByClassName("keyButton1")) {
    if (el.textContent === letter) {
      let oldColor = el.style.backgroundColor;
      if (oldColor === "green") {
        return;
      }

      if (oldColor === "yellow" && color !== "green") {
        return;
      }

      el.style.backgroundColor = color;
      break;
    }
  }
}
function shadeKeyBoard2(letter, color) {
  for (const el of document.getElementsByClassName("keyButton2")) {
    if (el.textContent === letter) {
      let oldColor = el.style.backgroundColor;
      if (oldColor === "green") {
        return;
      }

      if (oldColor === "yellow" && color !== "green") {
        return;
      }

      el.style.backgroundColor = color;
      break;
    }
  }
}

// Find the key that matches the given letter
// If the key is already green, do nothing
// If the key is currently yellow, only allow it to become green
// Else, shade the key passed to the function
