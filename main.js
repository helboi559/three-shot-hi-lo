//input: random num between 1-100 with 3 chances 
//output: if correct stop checking log correct num/if incorrect help point in  right direction

const prompt = require('prompt-sync')({sigint:true})
//generate random num to compare against
const actualNum = Math.floor(Math.random()*100)+1
//ask for the guess
let guess = Number(prompt("I'm thinking of a number bewtween 1 and 100. Try to guess it: "))
//set chances to 1 becuase you already used one chance above technically
let chances = 1

//while chances are less than 3
while (chances < 3)  {
    // increase chance by 1
    chances += 1 
    //if they get it correct within 3 chances
    if (guess === actualNum) {
        console.log(`Congratulations! ${guess} is correct!`)
    } else {
        //if they dont get it correct within 3 chances
        if (guess < actualNum) {
            guess = Number(prompt('Sorry, too low! Guess again: '))
            } else {
                guess = Number(prompt('Sorry, too High! Guess again: '))
        } 
    }
    
}
//handle if they still didnt get it correct
if (guess < actualNum) {
    console.log(`Sorry too low. I was thinking of ${actualNum}.`)
} else {
    console.log(`Sorry too high. I was thinking of ${actualNum}.`)
}

