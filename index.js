const surpriseButton = document.querySelector("#surprise-button")
const p1Button = document.querySelector("#playerName-button")
const p2Button = document.querySelector("#player2-button")
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const input = document.querySelector('input')
console.log(input);


//* Creating theme selection to coincide with surprise me button



surpriseButton.addEventListener("click", function(e){
    let randomNum = Math.floor(Math.random() * 4)
    if (randomNum === 0) {
        e.target.innerHTML = "Holiday Edition";
    } else if (randomNum === 1) {
        e.target.innerHTML = "Food Edition"
    } else if (randomNum === 2) {
        e.target.innerHTML = "General Theme Edition";
    }     
    audio.play()
});

//0 = Holiday Edition
//1 = Food Edition
//2 = General Theme Edition 


p1Button.addEventListener("click", function(e) {
    audio.play()
    const li = document.createElement("li")
    li.textContent = `Welcome Player: ${input.value.toUpperCase()}`
    document.querySelector('ul').appendChild(li)
    input.value = ""
})



//* Themes

let foodTheme = ["anise", "curry", "dairy", "dates","dough", "drink", "feast", "flour", "fried", "fruit", "guava", "herbs", "honey", "icing", "jelly", "juice", "lemon", "maize", "mango", "melon", "pizza", "olive", "onion", "pasta", "peach", "pecan ", "syrup" , "thyme", "toast", "apple"]
let holidayTheme = ["carol", "snowy", "druid", "elves", "holly", "jolly", "peace", "music", "bells", "cards", "arbor", "labor", "candy", "hymns", "cupid", "gnome", "claus", "movie", "vixen", "santa", "roses", "heart", "lucky", "clove", "july", "birth", "eagle", "rabbi", "earth", "cacao"]
let generalTheme = ["cabby", "babes", "early", "eager", "fable", "gable", "habit", "jacks", "macaw", "pacer", "packs", "rabid", "sabre", "tables", "tabby", "udder", "vague", "wacky", "waded", "yacks", "cadet", "imply", "index", "indie", "abhor", "ideas", "icons", "inbox", "genes", "gears"]

console.log(foodTheme.length); //30
console.log(holidayTheme.length); //30
console.log(generalTheme.length); //30

//* Arrays
const numOfGuesses = 4;
let remainingGuess = numOfGuesses;
let currentGuess = []
let nextLetter = 0;
let correctFoodGuess = foodTheme[Math.floor(Math.random() * foodTheme.length)]
let correctHolidayGuess = holidayTheme[Math.floor(Math.random() * holidayTheme.length)]
let correctGeneralGuess = generalTheme[Math.floor(Math.random() * generalTheme.length)]
console.log(correctFoodGuess);
console.log(correctHolidayGuess);
console.log(correctGeneralGuess);

const body = document.querySelector("body")
console.log(body);

//* Building the boards 
function firstBoard() {
    firstBoard = document.querySelector("#firstBoard")
    for (let i = 0; i < numOfGuesses; i++) {
        let rowDiv1 = document.createElement("div")
        rowDiv1.className = "tile-row"
        
        for (let j = 0; j < 5; j++) {
            let boxDiv1 = document.createElement("div")
            boxDiv1.className = "tile-box"
            rowDiv1.append(boxDiv1)
        }
        firstBoard.append(rowDiv1)
    }
}

firstBoard()


function secondBoard() {
    secondBoard = document.querySelector("#secondBoard")
    for (let i = 0; i < numOfGuesses; i++) {
        let rowDiv2 = document.createElement("div")
        rowDiv2.className = "tile-row"
        
        for (let j = 0; j < 5; j++) {
            let boxDiv2 = document.createElement("div")
            boxDiv2.className = "tile-box"
            rowDiv2.append(boxDiv2)
        }
        secondBoard.append(rowDiv2)
    }
}

secondBoard()



//* KeyBoard



