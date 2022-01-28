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
// empty array to hold each user input and final score
let users = [];
// reference submit button to save user score
const userSubmit = document.getElementById('submit');

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
    
    // make button clicked out of focus to return 
    event.target.blur();

    // if userAnswer = the answer to the current question do this
    if (userAnswer === questionAnswer[currQuestionIndex].answer) {

        // if the current question is the last question, end the game
        if (currQuestionIndex === 9) {
            endGame();
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

// displays endScreen once last question has been asked AND user answered it correctly
function endGame() {
    // stop the time
    clearInterval(timeInterval);

    // hide questions screen
    questionsScreen.classList.remove('start');
    questionsScreen.classList.add('hide');

    // show end game screen
    endScreen.classList.remove('hide');
    endScreen.classList.add('start');

    // grab the time left as a score and display it on the screen
    let displayedScore = document.getElementById('final-score');
    displayedScore.innerText = timerCount;
};

// get the users doggo-name and score and save it to local storage
function saveScore() {

    // get users input value
    let userDoggo = document.getElementById('doggo-name').value;

    // set user score to time remaining
    let userScore = timerCount;

    // if user enters valid response, save info, else alert
    if (userDoggo.length > 0) {

        alert("Your score has been saved!");

        // push the input name and score into empty array
        users.push ({
            user: userDoggo,
            score: userScore
        });
    }
    else {
        alert("Please enter a valid response!")
        return;
    }

    // save users array to local storage but stringify first
    localStorage.setItem('highScores', JSON.stringify(users));

    // hide end screen
    endScreen.classList.remove('start');
    endScreen.classList.add('hide');

    // show start game screen
    startScreen.classList.remove('hide');
    startScreen.classList.add('start');

    // reset timer text
    timerEl.textContent = 200;
};

// when submit button is clicked, save score
userSubmit.addEventListener('click', saveScore);

// if enter key is pressed after doggo name input, save score as well
function enterKeyPressed(event) {
    if (event.keyCode == 13) {
       saveScore();
       return true;
    }
};
