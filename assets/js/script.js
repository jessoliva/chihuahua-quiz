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

// QUESTIONS
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