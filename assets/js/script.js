// START SCREEN
// reference Start Quiz <button> with id="start"
const startBtn = document.getElementById('start');
// reference start screen 
const startScreen = document.getElementById('start-screen');

// QUESTIONS SCREEN
// reference questions screen
const questionsScreen = document.getElementById('questions');
// reference location where questions will display
const questionText = document.getElementById('question-title');

// END GAME SCREEN
const endScreen = document.getElementById('end-screen');

// LOSE SCREEN
const loseScreen = document.getElementById('lose-screen');

// TIMER
let timerEl = document.getElementById('time');  
// declare timeInterval
let timeInterval;
// declare timer variable
let timerCount;

// QUESTIONS
// start with question 1
let currQuestionIndex = 0;

// questions array
const questionAnswer = [
    {
        question: 'which chihuahua is black?',
        answer: 'mini'
    },
    {
        question: 'which chihuahua is tan?',
        answer: 'flash'
    },
    {
        question: 'which chihuahua is white?',
        answer: 'jedi'
    },
    {
        question: 'which chihuahua is brown?',
        answer: 'peke'
    },
    {
        question: 'which chihuahua has a tiny white spot on their head?',
        answer: 'peke'
    },
    {
        question: 'which chihuahua has honey-colored eyes?',
        answer: 'flash'
    },
    {
        question: 'which chihuahua is deaf but happiest with life?',
        answer: 'jedi'
    },
    {
        question: 'which chihuahua weights the least?',
        answer: 'mini'
    },
    {
        question: 'which chihuahua is the slowest?',
        answer: 'flash'
    },
    {
        question: 'which chihuahua jumps the highest?',
        answer: 'peke'
    },
];

// function to start the quiz
function startQuiz() {
    // set timer time
    timerCount = 200;
    // set displayed time equal to starting time
    timerEl.textContent = timerCount;
    // start timer callback
    startTimer();

    // hide start screen
    startScreen.classList.remove('start');
    startScreen.classList.add('hide');

    // display questions screen
    questionsScreen.classList.remove('hide');
    questionsScreen.classList.add('start');


    // call showQuestions function to display questions
    displayQuestions();
};

// when start quiz button is clicked, run startQuiz
startBtn.addEventListener('click', startQuiz);

// start timer 
function startTimer() {

    // setInterval @ 1sec
    timeInterval = setInterval(function() {

        // deduct timerCount -1 after 1sec
        timerCount -= 1;

        // let the displayed time equal this value
        timerEl.textContent = timerCount;

        // if time is less than or equal to 0, run this
        if (timerCount <= 0) {

            // hide questions screen
            questionsScreen.classList.remove('start');
            questionsScreen.classList.add('hide');

            // show lose screen
            loseScreen.classList.remove('hide');
            loseScreen.classList.add('start');

            // set displayed time to 00
            timerEl.textContent = '00';

            // stop the timer
            clearInterval(timeInterval);
        }
    }, 1000);
};

// display questions
function displayQuestions() {

    let currQuestion = questionAnswer[currQuestionIndex];
    questionText.innerText = currQuestion.question;
};

// get value from clicked button and compare to correct answer
function clickedAnswer(event) {

    // let userAnswer = the text of the button the user clicked
    let userAnswer = event.target.innerText;

    // if userAnswer = the answer to the current question do this
    if (userAnswer === questionAnswer[currQuestionIndex].answer) {

        // if the current question is the last question, end the game
        if (currQuestionIndex === 9) {
            // endGame();
        }
        // else, go to the next question
        else {
            currQuestionIndex++;
            displayQuestions();
        }
    }
    // if the question is incorrect, subtract 10 secs
    else {
        timerCount-=10;
    }
};