const surpriseButton = document.querySelector("#surprise-button")
const funButton = document.querySelector("#fun-mode-button")
console.log(surpriseButton);
console.log(funButton);



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
});

//0 = Holiday Edition
//1 = Food Edition
//2 = General Theme Edition 


funButton.addEventListener("click", function(e) {
    console.log("fun button clicked");
})
//when we click on fun mode - music gets added 

//* Themes

let foodTheme = ["anise", "curry", "dairy", "dates","dough", "drink", "feast", "flour", "fried", "fruit", "guava", "herbs", "honey", "icing", "jelly", "juice", "lemon", "maize", "mango", "melon", "mint", "olive", "onion", "pasta", "peach", "pecan ", "syrup" , "thyme", "toast", "apple"]
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

//*maybe
// function makeBoard(){
//     let board = document.querySelector("#board")
//     console.log(board);



// }

// makeBoard()
function firstBoard() {
    let board = document.getElementById("firstBoard");

    for (let i = 0; i < numOfGuesses; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.append(box)
        }

        board.append(row)
    }
}

firstBoard()


function secondBoard() {
    let board = document.getElementById("secondBoard");

    for (let i = 0; i < numOfGuesses; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.append(box)
        }

        board.append(row)
    }
}

secondBoard()

