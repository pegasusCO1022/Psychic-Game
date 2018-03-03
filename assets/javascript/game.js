//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var random = Math.floor(Math.random()* computerChoices.length)
// console.log(random)

var currentLetter = computerChoices[random]
// console.log(currentLetter)

var userWins = document.getElementById("wins")
    userWins.innerText = wins

var userLosses = document.getElementById("losses")
    userLosses.innerText = losses

var userGuessesLeft = document.getElementById("guessLeft")
    userGuessesLeft.innerText = guessesLeft

document.onkeyup = function(event) {

    var userGuess = event.key
    console.log(event)
    guessedLetters.push(userGuess)
    var guessedDiv = document.getElementById("user-guess")
    guessedDiv.innerText = guessedLetters


if (userGuess === currentLetter) {
    wins++
    userWins.innerText = wins
    alert("Wow! I can't believe it. Can you do it again?")
}

if (userGuess !== currentLetter) {
    losses++
    userLosses.innerText = losses
    guessesLeft--
    userGuessesLeft.innerText = guessesLeft
}

if (guessesLeft === 0) {
    alert("Game Over! Better luck next time.")
    window.location.reload()
}

if (wins === 2) {
    alert("You must be a psychic! Better go play the lottery!")
    window.location.reload()
}
}
// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

// 1. Create Html layout
// 2. Computer to generate random letter
// 3. when a key is pressed something needs to happen
//    -write letter to document 
//    -(Optional) subtracts a guess from alloted amount
// 4. need to compare user guess to computer generated letter
// 5. if user guess is equal to computer generated letter adds wins to page
//    -if use guess is not equal then tallys a lose to page
