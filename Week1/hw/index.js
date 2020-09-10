let button = document.getElementById('guessButton');
let tries = 0;
let randomNumber = Math.floor(Math.random() * 100);
let pastGuess = [];
let timeOut = 5;
function reset() {
    randomNumber = Math.floor(Math.random() * 100);
    document.getElementById('reload').innerHTML = "Reload in 5 second(s)";
    document.getElementById('guessButton').disabled = true;
    setInterval(() => {
        timeOut -= 1;
        document.getElementById('reload').innerHTML = `Reload in ${timeOut} second(s)`;
    }, 1000)
    setTimeout(() => {
        document.location.reload();
    }, 5000)
}
button.addEventListener('click', function() {
    tries += 1;
    let userGuess = parseInt(document.getElementById('number').value);
    pastGuess.push(userGuess);
    if (userGuess === randomNumber) {
        var innerMessage = tries === 1? "1 try": `${tries} tries`;
        document.getElementById('message').innerHTML =
            `<p class="true">Congratulation! ${randomNumber} was the correct 
            answer! It took you ${innerMessage} to guess the answer</p>`;
    }
    else {
        var innerMessage = userGuess > randomNumber? "high": "low";
        var innerMessage2 = tries === 9? "1 guess": (
            tries === 10? "no guess": `${10 - tries} guesses`
        );
        document.getElementById('message').innerHTML = 
            `<p class="false">Sorry your guess is too ${innerMessage}. 
            Your have ${innerMessage2} left</p>`;
    }
    if (tries == 10) console.log("Guesses reach 10");
    var pastGuessMessage = tries === 10?`The correct answer is ${randomNumber}. `:"";
    pastGuessMessage += "Your last guess(es) are: ";
    pastGuess.forEach(element => pastGuessMessage += `${element.toString()} `);
    document.getElementById('pastGuess').innerHTML = 
        pastGuessMessage;
    if (userGuess === randomNumber || tries === 10)
        reset();
});