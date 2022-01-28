// get parent ol element for lists
const highScoresEl = document.getElementById('highscores');

// NO SCORES SCREEN
const noScoresEl = document.getElementById('no-scores');

// load scores saved onto local storage
function loadsScores() {

    // get scores from local storage
    let savedScores = localStorage.getItem('highScores');
       
    // if there are no scores to display, return out of function
    if (!savedScores) {

        // hide ol list
        highScoresEl.classList.remove('start');
        highScoresEl.classList.add('hide');

        // show no scores yet screen
        noScoresEl.classList.remove('hide');
        nocoresEl.classList.add('start');

    }

    // turn loaded scores into array
    savedScores = JSON.parse(savedScores);

    // sort object by high score
    savedScores.sort((a, b) => b.score - a.score);

    // 
    for (var i = 0; i < savedScores.length; i++) {
        
        // set user doggo name to a variable to loop through
        let userName = savedScores[i].user;
        // set user score to a variable to loop through
        let userScore = savedScores[i].score;

        // create li element for each user
        const listScoreEl = document.createElement('li');

        // inner html to created li element
        listScoreEl.innerHTML = 'User: ' + userName + '&nbsp;&nbsp; | &nbsp; Score: ' + userScore;

        // append each li element created to the parent ol
        highScoresEl.appendChild(listScoreEl);
    }
};
loadsScores();