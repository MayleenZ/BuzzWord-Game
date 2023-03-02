const surpriseButton = document.querySelector("#surprise-button");
const p1Button = document.querySelector("#playerName-button");
const clickingNoise = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const evilLaugh = new Audio("https://www.fesliyanstudios.com/play-mp3/3976")
const booSound = new Audio("https://www.fesliyanstudios.com/play-mp3/4221")
const input = document.querySelector("input");
console.log(input);

//* Creating theme selection to coincide with surprise me button; using random
surpriseButton.addEventListener("click", function (e) {
  clickingNoise.play();
  let randomNum = Math.floor(Math.random() * 4);
  if (randomNum === 0) {
    e.target.innerHTML = "Holiday Edition"; //0
  } else if (randomNum === 1) {
    e.target.innerHTML = "Food Edition"; //1
  } else if (randomNum === 2) {
    e.target.innerHTML = "General Theme Edition"; //2
  }
});


//* Adds player names to document
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

let allWords = []
console.log(holidayTheme);
console.log(generalTheme);
console.log(foodTheme);

allWords.push(holidayTheme)
allWords.push(foodTheme)
allWords.push(generalTheme)
console.log(allWords.join(","));

////////////////* Declaring variables

///* Targeting keyboard1
const numOfGuesses1 = 4;
let remainingGuess1 = numOfGuesses1;
let currentGuess1 = [];
let nextLetter1 = 0;
let correctFoodGuess1 = foodTheme[Math.floor(Math.random() * foodTheme.length)];
let correctHolidayGuess1 = holidayTheme[Math.floor(Math.random() * holidayTheme.length)];
let correctGeneralGuess1 = generalTheme[Math.floor(Math.random() * generalTheme.length)];
//* Keyboard 1 targetted rightGuessString
console.log(correctFoodGuess1);
console.log(correctHolidayGuess1);
console.log(correctGeneralGuess1);

///* Targetting keyboard2
const numOfGuesses2 = 4;
let remainingGuess2 = numOfGuesses2;
let currentGuess2 = [];
let nextLetter2 = 0;
let correctFoodGuess2 = foodTheme[Math.floor(Math.random() * foodTheme.length)];
let correctHolidayGuess2 = holidayTheme[Math.floor(Math.random() * holidayTheme.length)];
let correctGeneralGuess2 = generalTheme[Math.floor(Math.random() * generalTheme.length)];
 //* Keyboard 2 rightGuessString
console.log(correctFoodGuess2);
console.log(correctHolidayGuess2);
console.log(correctGeneralGuess2);

//*body document selected
const body = document.querySelector("body");
console.log(body);



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
const keyboard1 = document.querySelector(".keyboard1") //using var
const board1 = document.querySelector("#firstBoard")
const boardandkey1 = document.querySelector("#board1andkey")
console.log(keyboard1);
console.log(board1);
console.log(boardandkey1);

const keyboard2 = document.querySelector(".keyboard2") //using var
const board2 = document.querySelector("#secondBoard")
const boardandkey2 = document.querySelector("#board2andkey")
console.log(keyboard2);
console.log(board2);
console.log(boardandkey2);

//*This function captures what I write on my keyboard
keyboard1.addEventListener("keypress", function (e) {
  const selectedKey = e.key.toLowerCase();

  if (selectedKey === "enter") {
    checkGuess1();
    return;
  }

});

keyboard2.addEventListener("keypress", function (e) {
    const selectedKey = e.key.toLowerCase();
  
    if (selectedKey === "enter") {
      checkGuess2();
      return;
    }
  
  });
//*This event will click on screen only the letters //this works
//* I need to be able to target to seperate keyboards 
//* Going to convert this to only be compatible with keyboard1

keyboard1.addEventListener("click", function (e) {
  let selectedKey = e.target.innerHTML
  let isLetter1 = selectedKey >= "a" && selectedKey <= "z";
  if (remainingGuess1 === 0 || remainingGuess2 === 0) {
    return;
  }
  if (isLetter1) {
    console.log(selectedKey);
  } else if (selectedKey  === "backspace" && nextLetter1 != 0) {
    deleteLetter1();
    return;
  } else {
    e.preventDefault();
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
  if (remainingGuess1 === 0 || remainingGuess2 === 0) {
    return;
  }
  if (isLetter2) {
    console.log(selectedKey);
  } else if (selectedKey === "backspace" && nextLetter2 != 0) {
    deleteLetter2();
    return;
  } else {
    e.preventDefault();
    return;
  }
  if (selectedKey === "enter") {
    checkGuess2();
    return;
  }

  if (selectedKey === "buzz word") {
    booSound.play()
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

//* Going to add both boards in here so that if user selects keyboard1 - only keyboard1 selected keys will be pushed same with keyboard2 

function insertLetter1(selectedKey) {

  if (nextLetter1 === 5) {
    return;
  }
  let targetRow1 = document.querySelector(".tile-row1")
  console.log(targetRow1.children)[4 - remainingGuess1];
    let letter1 = targetRow1.children[nextLetter1];
    letter1.textContent = selectedKey;
    letter1.classList = "filled-box";
    currentGuess1.push(selectedKey);
    nextLetter1 += 1;
}

function insertLetter2(selectedKey) {
    let targetRow2 = document.querySelector(".tile-row2")[4 - remainingGuess2];
  
    if (nextLetter2 === 5) {
      return;
    }

    let letter2 = targetRow2.children[nextLetter2];
    letter2.textContent = selectedKey;
    letter2.classList = "filled-box";
    currentGuess2.push(selectedKey);
    nextLetter2 += 1;
}

// console.log(keyboard1.children[0]);
// console.log(keyboard1.children[1]);
// console.log(keyboard1.children[2].children[0].classList);
// const classL = keyboard1.children[2].children[0].classList
// console.log(classL.value);
// const letterZ = keyboard1.children[2].children[0].innerText
// console.log(letterZ);

// const keyButton1 = document.querySelectorAll(".keyButton1")
// console.log(keyButton1.length);
// console.log(keyButton1);

// for(ebutton of keyButton1) {
//     console.log(ebutton);
// }
// const keyButton2 = document.querySelectorAll(".keyButton2")
// console.log(keyButton2.length);
// console.log(keyButton2);

// for(ebutton of keyButton2) {
//     console.log(ebutton);
// }

// let targetTile2 = document.querySelector(".tile-box2");
// let targetRow2 = document.querySelector(".tile-row2");
// let targetTile1 = document.querySelector(".tile.box1");
// let targetRow1 = document.querySelector(".tile-row1");

// let keyboard1 = document.querySelector(".keyboard1");
// let keyboard2 = document.querySelector(".keyboard2");
// const keyButton2 = document.querySelectorAll(".keyButton2")
// const keyButton1 = document.querySelectorAll(".keyButton1")


//* Rest of functions 
function deleteLetter1(){
    //row = targetrow  box = letter1
    let targetRow1 = document.querySelector(".tile-row1")[4 - remainingGuess1]
        let letter1 = targetRow1.children[nextLetter1 - 1];
        letter1.textContent = ""
        letter1.classList.remove = "filled-box";
        currentGuess1.pop();
        nextLetter1 -= 1;
}

function deleteLetter2(){
    //row = targetrow  box = letter1
    let targetRow2 = document.querySelector(".tile-row2")[4 - remainingGuess1]
        let letter2 = targetRow2.children[nextLetter2 - 1];
        letter2.textContent = ""
        letter2.classList.remove = "filled-box";
        currentGuess2.pop();
        nextLetter2 -= 1;
}

function checkGuess1(){
    let targetRow1 = document.querySelector(".tile-row1")[4 - remainingGuess1]
    let guessString = ""
    let correctFoodGuess = Array.from(correctFoodGuess1)
    let correctHolidayGuess = Array.from(correctHolidayGuess1)
    let correctGuess = Array.from(correctGeneralGuess1)

    for (const eachVal of currentGuess1){
        guessString += eachVal
    }

    if(guessString != 5) {
        alert("BuzzWord is laughing at your right now")
        return
    }

    if(guessString != allWords){
        alert("Oof nice try I guess")
        return
    }


}


function checkGuess2(){

}

console.log(correctFoodGuess2);
console.log(correctHolidayGuess2);
console.log(correctGeneralGuess2);