//reference to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remaindLettersElement = document.getElementById("letters-remained");
const letterInputElement=document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");

//global variables
const questionsWords = [["Какая кошка самая большая на планете?","тигр"],
["Какое сухопутное животное может открыть рот максимально широко?","бегемот"],
["Какая планета самая большая в Солнечной системе?", "юпитер"],
["Какая звезда ближе всего к Земле?", "солнце"],
["Под воздействием какой силы предметы падают на землю?", "гравитация"],
["Какое самое твердое вещество в нашем теле?", "зубы"]];
let currentIndex = 0;
let answer;
let attempts;
let flGameOver = false;

//function

function startGame()
{
    wordInputElement.value="";
    wordInputElement.readOnly = true;
    letterInputElement.readOnly = false;
    if (currentIndex===questionsWords.length) {currentIndex = 0}
    questionElement.innerHTML = questionsWords[currentIndex][0];
    answer = questionsWords[currentIndex][1];
    attempts = Attempts(answer)
    remaindLettersElement.innerHTML = `Вы можете открыть "${attempts}" любые буквы. Они откроются, если они есть в слове.`;
    playAgain.style.display ='none';
    resultMessage.innerHTML ='';
    getWordDivs(answer);
    flGameOver = false;
}

function getWordDivs(word)
{
    const arrayWord = Array.from(word);
    wordElement.innerHTML = arrayWord.reduce (function (res,cur,index)
    {
        res = res + `<div class = "letter" id= "${index}">${arrayWord[index]}</div>`
        return res;
    },'')
}

function checkWord()
{
        const answerOfGuest = wordInputElement.value; 
        if (answerOfGuest.length != answer.length) 
        {alert("Ошибка. Количество букв в веденном Вами слове не совпадает с количеством букв в загаданном слове");
        wordInputElement.value = "";
        return;}
        if (answerOfGuest === answer)
            {finishGame(1);}
        else if (answerOfGuest != answer) {finishGame(0);
        }
        Array.from(answer).map(function(element,index)
        {
            document.getElementById(index).style.background = "white";
            });
}


function Attempts(word)
{
    let wordfinish = Array.from(word);
    let numberofAttempts = Math.round(wordfinish.length * 0.3);
    return numberofAttempts;
}

function processLetter()
{
    let guessLetter = letterInputElement.value;
    let word = Array.from(answer);
    word.map(function(element, index)
    {
        if (guessLetter === element) 
        {
            document.getElementById(index).style.background = "white";}
    } );
    letterInputElement.value = "";
    attempts--;
    remaindLettersElement.innerHTML = `Вы можете открыть "${attempts}" любые буквы. Они откроются, если они есть в слове.`;
    if (attempts === 0)
    {wordInputElement.readOnly = false;
    letterInputElement.readOnly = true
    remaindLettersElement.innerHTML = `Вы использовали все попытки угадать буквы в слове. Сейчас Вам нужно попробовать угадать слово`;}
}

function takeChance()
{
    wordInputElement.readOnly = false;
    letterInputElement.readOnly = true;
}

function finishGame(control)
{
    control === 1 ? resultMessage.innerHTML = "Вы выиграли! Приз - АВТОМОБИЛЬ!" : resultMessage.innerHTML =  "Вы проиграли! Ваше очко переходит в зрительный зал!";
    flGameOver = true;
    playAgain.style.display='block';
    remaindLettersElement.innerHTML = "";
    wordInputElement.value = "";
    wordInputElement.readOnly = true;
    currentIndex++;
}


startGame();