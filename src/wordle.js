//References to documents objects model
const guessInputElement = document.querySelector(".guess-input");
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs;
let trialsElement = document.querySelector(".trials-remained");
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again");
//variables required for JS logic
const wordsForGuess = ["pappy", "apple", "table","gold","silver","index","script","peace","picture", "car", "cat"];
let trials;
let word;
let flGameOver = false;
//Functions

function startGame()
{
    word = getword();
    fillLettersDivs();
    flGameOver = false;
    trials = word.length + 1;
    playAgainElement.style.display = "none";
    gameResultElement.innerHTML = "";
    trialsElement.innerHTML = `REMAINED TRIALS ${trials}`;
}

function getword()
{
    const index = Math.trunc(Math.random() * wordsForGuess.length);
    return wordsForGuess[index];
}

function fillLettersDivs()
{
    const arrayWord = Array.from(word);
    guessLettersElement.innerHTML = arrayWord.reduce (function (res,cur){
        res = res + '<div class = "letter"></div>'
        return res;
    },'')
    lettersDivs = document.querySelectorAll(".letter");
}

function onChange()
{
    if(flGameOver)
    {
        alert("Game is over, press play-again")
    } 
    else
    {
        const trialWord = guessInputElement.value; 
        trials --;
        let counter = 0;
        counter++;
        trialsElement.innerHTML = `REMAINED TRIALS ${trials}`;
        if (trialWord.length != word.length)
        {
            alert("WRONG NUMBERS OF LETTERS")
        }
        else {coloringWord(trialWord);  
        let control =1 ;
        if (trialWord == word)
        {finishGame(control)};
        if (trials === 0) {finishGame(0)};
        guessInputElement.value='';
        }}
    
    function coloringWord(trialWord)
    {
    const arrayWord = Array.from(trialWord);
    arrayWord.forEach(function(letter, index)
    {
        lettersDivs[index].innerHTML = letter;
        lettersDivs[index].style.color = getColor (letter,index);
    })};

    function getColor(letter, index)
    {
    let res = "red"
    if(word.includes(letter)){
        res = word[index] == letter ?  "green" : "yellow";
    }
    return res;}

function finishGame(controlNumber) {
    if (controlNumber==1) {
        gameResultElement.innerHTML =  "You are winner"
        flGameOver = true;
    playAgainElement.style.display='block';
    trialsElement.innerHTML = `You guessed the word using ${word.length-trials+1} attempts`;
    } else if (controlNumber===0) {
        gameResultElement.innerHTML =  "You are loser";
        flGameOver = true;
    playAgainElement.style.display='block';
    trialsElement.innerHTML = 'You have used all attempts to guess the word.';
    } 
}
}
startGame();
