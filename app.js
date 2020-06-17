// Create event listeners for buttons

// 20
document.getElementById('s-20').addEventListener('click', single20);
document.getElementById('d-20').addEventListener('click', double20);
document.getElementById('t-20').addEventListener('click', triple20);


// 19
document.getElementById('s-19').addEventListener('click', single19);
document.getElementById('d-19').addEventListener('click', double19);
document.getElementById('t-19').addEventListener('click', triple19);


// 18
document.getElementById('s-18').addEventListener('click', single18);
document.getElementById('d-18').addEventListener('click', double18);
document.getElementById('t-18').addEventListener('click', triple18);

// 17
document.getElementById('s-17').addEventListener('click', single17);
document.getElementById('d-17').addEventListener('click', double17);
document.getElementById('t-17').addEventListener('click', triple17);

// 16
document.getElementById('s-16').addEventListener('click', single16);
document.getElementById('d-16').addEventListener('click', double16);
document.getElementById('t-16').addEventListener('click', triple16);

// 15
document.getElementById('s-15').addEventListener('click', single15);
document.getElementById('d-15').addEventListener('click', double15);
document.getElementById('t-15').addEventListener('click', triple15);

// Bull
document.getElementById('s-bull').addEventListener('click', singleBull);
document.getElementById('d-bull').addEventListener('click', doubleBull);

// Miss
document.getElementById('miss').addEventListener('click', miss);

// Play Again
document.getElementById('play-again').addEventListener('click', playAgain);

// Game Variables
let turn = "player1";
let round = 1;

let p1_win = false;
let p2_win = false;

// Player 1 Variables
let p1_score = 0;

let p1_20_closed = false;
let p1_19_closed = false;
let p1_18_closed = false;
let p1_17_closed = false;
let p1_16_closed = false;
let p1_15_closed = false;
let p1_bull_closed = false;

let p1_20_marks = 0;
let p1_19_marks = 0;
let p1_18_marks = 0;
let p1_17_marks = 0;
let p1_16_marks = 0;
let p1_15_marks = 0;
let p1_bull_marks = 0;

let p1_total_marks = 0;
let p1_total_darts = 0;
let p1_round_marks = 0;
let p1_round_darts = 0;

let p1_round_arr = [];

// Player 2 Variables
let p2_score = 0;

let p2_20_closed = false;
let p2_19_closed = false;
let p2_18_closed = false;
let p2_17_closed = false;
let p2_16_closed = false;
let p2_15_closed = false;
let p2_bull_closed = false;

let p2_20_marks = 0;
let p2_19_marks = 0;
let p2_18_marks = 0;
let p2_17_marks = 0;
let p2_16_marks = 0;
let p2_15_marks = 0;
let p2_bull_marks = 0;

let p2_total_marks = 0;
let p2_total_darts = 0;
let p2_round_marks = 0;
let p2_round_darts = 0;

let p2_round_arr = [];

// Start Game
function startGame() {

    turn = 'player1';
    round = 1;
    document.getElementById('player1-heading').className = 'bg-warning p-1';
    document.getElementById('p2-dart-1').className = 'hide';
    document.getElementById('p2-dart-2').className = 'hide';
    document.getElementById('p2-dart-3').className = 'hide';
    document.getElementById('next-player').className = 'hide';
    document.getElementById('play-again').className = 'hide';
}

// Player-Game Functions 
function getPlayer1MPR() {
    return p1_total_marks / (p1_total_darts / 3);
}

function getPlayer2MPR() {
    return p2_total_marks / (p2_total_darts / 3);
}

function showPlayer1MPR() {
    document.getElementById('p1-mpr').innerHTML = getPlayer1MPR().toFixed(2);
}

function showPlayer2MPR() {
    document.getElementById('p2-mpr').innerHTML = getPlayer2MPR().toFixed(2);
}

function gameStats() {
    if (p1_win === true) {
        disableButtons();
        document.getElementById('winner').innerHTML = `WINNER: Player 1 !!! <br> MPR: ${getPlayer1MPR().toFixed(2)}`;
        document.getElementById('play-again').className = 'text-center';
    } else if (p2_win === true) {
        disableButtons();
        document.getElementById('winner').innerHTML = `WINNER: Player 2 !!! <br> MPR: ${getPlayer2MPR().toFixed(2)}`;
        document.getElementById('play-again').className = 'text-center';

    }
}

function disableButtons() {

    document.getElementById('s-20').disabled = true;
    document.getElementById('d-20').disabled = true;
    document.getElementById('t-20').disabled = true;

    document.getElementById('s-19').disabled = true;
    document.getElementById('d-19').disabled = true;
    document.getElementById('t-19').disabled = true;

    document.getElementById('s-18').disabled = true;
    document.getElementById('d-18').disabled = true;
    document.getElementById('t-18').disabled = true;

    document.getElementById('s-17').disabled = true;
    document.getElementById('d-17').disabled = true;
    document.getElementById('t-17').disabled = true;

    document.getElementById('s-16').disabled = true;
    document.getElementById('d-16').disabled = true;
    document.getElementById('t-16').disabled = true;

    document.getElementById('s-15').disabled = true;
    document.getElementById('d-15').disabled = true;
    document.getElementById('t-15').disabled = true;

    document.getElementById('s-bull').disabled = true;
    document.getElementById('d-bull').disabled = true;
    document.getElementById('miss').disabled = true;

}

function enableButtons() {

    document.getElementById('s-20').disabled = false;
    document.getElementById('d-20').disabled = false;
    document.getElementById('t-20').disabled = false;

    document.getElementById('s-19').disabled = false;
    document.getElementById('d-19').disabled = false;
    document.getElementById('t-19').disabled = false;

    document.getElementById('s-18').disabled = false;
    document.getElementById('d-18').disabled = false;
    document.getElementById('t-18').disabled = false;

    document.getElementById('s-17').disabled = false;
    document.getElementById('d-17').disabled = false;
    document.getElementById('t-17').disabled = false;

    document.getElementById('s-16').disabled = false;
    document.getElementById('d-16').disabled = false;
    document.getElementById('t-16').disabled = false;

    document.getElementById('s-15').disabled = false;
    document.getElementById('d-15').disabled = false;
    document.getElementById('t-15').disabled = false;

    document.getElementById('s-bull').disabled = false;
    document.getElementById('d-bull').disabled = false;
    document.getElementById('miss').disabled = false;

}


function changeRound() {

    if (p1_round_darts === 3) {

        disableButtons();

        document.getElementById('next-player').className = 'lead text-center';

        setTimeout(() => {
            document.getElementById('p2-dart-1').className = 'show';
        }, 800);

        setTimeout(() => {
            document.getElementById('p2-dart-2').className = 'show';
        }, 1600);

        setTimeout(() => {
            document.getElementById('p2-dart-3').className = 'show';
        }, 2400);

        setTimeout(() => {
            document.getElementById('next-player').className = 'hide';
        }, 3150);

        setTimeout(() => {
            document.getElementById('player2-heading').className = 'bg-warning p-1';
            document.getElementById('player1-heading').className = 'p-1';
        }, 3250);

        setTimeout(() => {
            enableButtons();
        }, 3250);

        p1_round_darts = 0;
        turn = "player2";

    } else if (p2_round_darts === 3) {

        disableButtons();

        document.getElementById('next-player').className = 'lead text-center';

        setTimeout(() => {
            document.getElementById('p1-dart-1').className = 'show';
        }, 800);

        setTimeout(() => {
            document.getElementById('p1-dart-2').className = 'show';
        }, 1600);

        setTimeout(() => {
            document.getElementById('p1-dart-3').className = 'show';
        }, 2400);

        setTimeout(() => {
            document.getElementById('next-player').className = 'hide';
        }, 3150);

        setTimeout(() => {
            document.getElementById('player1-heading').className = 'bg-warning p-1';
            document.getElementById('player2-heading').className = 'p-1';
        }, 3250);

        setTimeout(() => {
            enableButtons();
        }, 3250);

        p2_round_darts = 0;
        turn = "player1";
        round++;
        document.getElementById('round').innerHTML = round;
    }
}

function checkWin() {

    if (p1_bull_closed && p1_15_closed && p1_16_closed && p1_17_closed && p1_18_closed && p1_19_closed && p1_20_closed && p1_score >= p2_score) {
        p1_win = true;
        gameStats();

    } else if (p2_bull_closed && p2_15_closed && p2_16_closed && p2_17_closed && p2_18_closed && p2_19_closed && p2_20_closed && p2_score >= p1_score) {
        p2_win = true;
        gameStats();
    } else {
        changeRound();
    }
}


function removeDart() {

    if (turn === 'player1') {

        if (p1_round_darts === 1) {
            document.getElementById('p1-dart-3').className = 'hide';
            showPlayer1MPR();
        }

        else if (p1_round_darts === 2) {
            document.getElementById('p1-dart-2').className = 'hide';
            showPlayer1MPR();
        }

        else if (p1_round_darts === 3) {
            document.getElementById('p1-dart-1').className = 'hide';
            showPlayer1MPR();
        }
    }

    else {

        if (p2_round_darts === 1) {
            document.getElementById('p2-dart-3').className = 'hide';
            showPlayer2MPR();
        }

        else if (p2_round_darts === 2) {
            document.getElementById('p2-dart-2').className = 'hide';
            showPlayer2MPR();
        }

        else if (p2_round_darts === 3) {
            document.getElementById('p2-dart-1').className = 'hide';
            showPlayer2MPR();
        }
    }
}


// Miss

function miss() {

    if (turn === 'player1') {
        p1_round_darts++;
        p1_total_darts++;
        removeDart();
        checkWin();

    } else {
        p2_round_darts++;
        p2_total_darts++;
        removeDart();
        checkWin();
    }
}

function playAgain() {
    location.reload();
}


// Singles

function single20() {

    if (turn === 'player1') {

        if (p1_20_marks === 0) {
            document.getElementById('p1-20').className = "fas fa-slash";
            p1_20_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_20_marks === 1) {
            document.getElementById('p1-20').className = "fas fa-times";
            p1_20_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();


        } else if (p1_20_marks === 2) {
            p1_20_marks++;
            p1_20_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            if (!p2_20_closed) {
                document.getElementById('p1-20').className = "far fa-times-circle text-success";
            } else if (p1_20_closed && p2_20_closed) {
                document.getElementById('p1-20').className = "far fa-times-circle text-danger";
                document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            }

            removeDart();
            checkWin();

        } else if (p1_20_marks >= 3 && !p2_20_closed) {
            document.getElementById('p1-20').className = "far fa-times-circle text-success";
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 20;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_20_marks >= 3 && p2_20_closed) {
            document.getElementById('p1-20').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_20_marks === 0) {
            document.getElementById('p2-20').className = "fas fa-slash";
            p2_20_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_20_marks === 1) {
            document.getElementById('p2-20').className = "fas fa-times";
            p2_20_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_20_marks === 2) {

            p2_20_marks++;
            p2_20_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            if (!p1_20_closed) {
                document.getElementById('p2-20').className = "far fa-times-circle text-success";
            } else if (p1_20_closed && p2_20_closed) {
                document.getElementById('p2-20').className = "far fa-times-circle text-danger";
                document.getElementById('p1-20').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_20_marks >= 3 && !p1_20_closed) {
            document.getElementById('p2-20').className = "far fa-times-circle text-success";

            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 20;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_20_marks >= 3 && p1_20_closed) {
            document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function single19() {

    if (turn === 'player1') {

        if (p1_19_marks === 0) {
            document.getElementById('p1-19').className = "fas fa-slash";
            p1_19_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_19_marks === 1) {
            document.getElementById('p1-19').className = "fas fa-times";
            p1_19_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_19_marks === 2) {
            p1_19_marks++;
            p1_19_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            if (!p2_19_closed) {
                document.getElementById('p1-19').className = "far fa-times-circle text-success";
            } else if (p1_19_closed && p2_19_closed) {
                document.getElementById('p1-19').className = "far fa-times-circle text-danger";
                document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_19_marks >= 3 && !p2_19_closed) {
            document.getElementById('p1-19').className = "far fa-times-circle text-success";
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 19;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_19_marks >= 3 && p2_19_closed) {
            document.getElementById('p1-19').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_19_marks === 0) {
            document.getElementById('p2-19').className = "fas fa-slash";
            p2_19_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_19_marks === 1) {
            document.getElementById('p2-19').className = "fas fa-times";
            p2_19_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_19_marks === 2) {

            p2_19_marks++;
            p2_19_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            if (!p1_19_closed) {
                document.getElementById('p2-19').className = "far fa-times-circle text-success";
            } else if (p1_19_closed && p2_19_closed) {
                document.getElementById('p2-19').className = "far fa-times-circle text-danger";
                document.getElementById('p1-19').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_19_marks >= 3 && !p1_19_closed) {
            document.getElementById('p2-19').className = "far fa-times-circle text-success";

            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 19;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_19_marks >= 3 && p1_19_closed) {
            document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function single18() {

    if (turn === 'player1') {

        if (p1_18_marks === 0) {
            document.getElementById('p1-18').className = "fas fa-slash";
            p1_18_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_18_marks === 1) {
            document.getElementById('p1-18').className = "fas fa-times";
            p1_18_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_18_marks === 2) {
            p1_18_marks++;
            p1_18_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            if (!p2_18_closed) {
                document.getElementById('p1-18').className = "far fa-times-circle text-success";
            } else if (p1_18_closed && p2_18_closed) {
                document.getElementById('p1-18').className = "far fa-times-circle text-danger";
                document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_18_marks >= 3 && !p2_18_closed) {
            document.getElementById('p1-18').className = "far fa-times-circle text-success";
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 18;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_18_marks >= 3 && p2_18_closed) {
            document.getElementById('p1-18').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_18_marks === 0) {
            document.getElementById('p2-18').className = "fas fa-slash";
            p2_18_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_18_marks === 1) {
            document.getElementById('p2-18').className = "fas fa-times";
            p2_18_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_18_marks === 2) {

            p2_18_marks++;
            p2_18_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            if (!p1_18_closed) {
                document.getElementById('p2-18').className = "far fa-times-circle text-success";
            } else if (p1_18_closed && p2_18_closed) {
                document.getElementById('p2-18').className = "far fa-times-circle text-danger";
                document.getElementById('p1-18').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_18_marks >= 3 && !p1_18_closed) {
            document.getElementById('p2-18').className = "far fa-times-circle text-success";

            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 18;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_18_marks >= 3 && p1_18_closed) {
            document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function single17() {

    if (turn === 'player1') {

        if (p1_17_marks === 0) {
            document.getElementById('p1-17').className = "fas fa-slash";
            p1_17_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_17_marks === 1) {
            document.getElementById('p1-17').className = "fas fa-times";
            p1_17_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_17_marks === 2) {
            p1_17_marks++;
            p1_17_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            if (!p2_17_closed) {
                document.getElementById('p1-17').className = "far fa-times-circle text-success";
            } else if (p1_17_closed && p2_17_closed) {
                document.getElementById('p1-17').className = "far fa-times-circle text-danger";
                document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_17_marks >= 3 && !p2_17_closed) {
            document.getElementById('p1-17').className = "far fa-times-circle text-success";
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 17;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_17_marks >= 3 && p2_17_closed) {
            console.log(p1_17_closed);
            console.log(p2_17_closed);
            document.getElementById('p1-17').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_17_marks === 0) {
            document.getElementById('p2-17').className = "fas fa-slash";
            p2_17_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_17_marks === 1) {
            document.getElementById('p2-17').className = "fas fa-times";
            p2_17_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_17_marks === 2) {
            p2_17_marks++;
            p2_17_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            if (!p1_17_closed) {
                document.getElementById('p2-17').className = "far fa-times-circle text-success";
            } else if (p1_17_closed && p2_17_closed) {
                document.getElementById('p1-17').className = "far fa-times-circle text-danger";
                document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_17_marks >= 3 && !p1_17_closed) {
            document.getElementById('p2-17').className = "far fa-times-circle text-success";
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 17;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_17_marks >= 3 && p1_17_closed) {
            document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function single16() {
    if (turn === 'player1') {

        if (p1_16_marks === 0) {
            document.getElementById('p1-16').className = "fas fa-slash";
            p1_16_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_16_marks === 1) {
            document.getElementById('p1-16').className = "fas fa-times";
            p1_16_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_16_marks === 2) {
            p1_16_marks++;
            p1_16_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            if (!p2_16_closed) {
                document.getElementById('p1-16').className = "far fa-times-circle text-success";
            } else if (p1_16_closed && p2_16_closed) {
                document.getElementById('p1-16').className = "far fa-times-circle text-danger";
                document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_16_marks >= 3 && !p2_16_closed) {
            document.getElementById('p1-16').className = "far fa-times-circle text-success";
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 16;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_16_marks >= 3 && p2_16_closed) {
            document.getElementById('p1-16').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_16_marks === 0) {
            document.getElementById('p2-16').className = "fas fa-slash";
            p2_16_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_16_marks === 1) {
            document.getElementById('p2-16').className = "fas fa-times";
            p2_16_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_16_marks === 2) {

            p2_16_marks++;
            p2_16_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            if (!p1_16_closed) {
                document.getElementById('p2-16').className = "far fa-times-circle text-success";
            } else if (p1_16_closed && p2_16_closed) {
                document.getElementById('p2-16').className = "far fa-times-circle text-danger";
                document.getElementById('p1-16').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_16_marks >= 3 && !p1_16_closed) {
            document.getElementById('p2-16').className = "far fa-times-circle text-success";

            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 16;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_16_marks >= 3 && p1_16_closed) {
            document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function single15() {

    if (turn === 'player1') {

        if (p1_15_marks === 0) {
            document.getElementById('p1-15').className = "fas fa-slash";
            p1_15_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_15_marks === 1) {
            document.getElementById('p1-15').className = "fas fa-times";
            p1_15_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_15_marks === 2) {
            p1_15_marks++;
            p1_15_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            if (!p2_15_closed) {
                document.getElementById('p1-15').className = "far fa-times-circle text-success";
            } else if (p1_15_closed && p2_15_closed) {
                document.getElementById('p1-15').className = "far fa-times-circle text-danger";
                document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            }

            removeDart();
            checkWin();

        } else if (p1_15_marks >= 3 && !p2_15_closed) {
            document.getElementById('p1-15').className = "far fa-times-circle text-success";
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 15;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_15_marks >= 3 && p2_15_closed) {
            document.getElementById('p1-15').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_15_marks === 0) {
            document.getElementById('p2-15').className = "fas fa-slash";
            p2_15_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_15_marks === 1) {
            document.getElementById('p2-15').className = "fas fa-times";
            p2_15_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_15_marks === 2) {

            p2_15_marks++;
            p2_15_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            if (!p1_15_closed) {
                document.getElementById('p2-15').className = "far fa-times-circle text-success";
            } else if (p1_15_closed && p2_15_closed) {
                document.getElementById('p2-15').className = "far fa-times-circle text-danger";
                document.getElementById('p1-15').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_15_marks >= 3 && !p1_15_closed) {
            document.getElementById('p2-15').className = "far fa-times-circle text-success";

            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 15;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_15_marks >= 3 && p1_15_closed) {
            document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function singleBull() {

    if (turn === 'player1') {

        if (p1_bull_marks === 0) {
            document.getElementById('p1-bull').className = "fas fa-slash";
            p1_bull_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_bull_marks === 1) {
            document.getElementById('p1-bull').className = "fas fa-times";
            p1_bull_marks++;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_bull_marks === 2) {
            p1_bull_marks++;
            p1_bull_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            if (!p2_bull_closed) {
                document.getElementById('p1-bull').className = "far fa-times-circle text-success";
            } else if (p1_bull_closed && p2_bull_closed) {
                document.getElementById('p1-bull').className = "far fa-times-circle text-danger";
                document.getElementById('p2-bull').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_bull_marks >= 3 && !p2_bull_closed) {
            document.getElementById('p1-bull').className = "far fa-times-circle text-success";
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 25;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_bull_marks >= 3 && p2_bull_closed) {
            document.getElementById('p1-bull').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_bull_marks === 0) {
            document.getElementById('p2-bull').className = "fas fa-slash";
            p2_bull_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_bull_marks === 1) {
            document.getElementById('p2-bull').className = "fas fa-times";
            p2_bull_marks++;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_bull_marks === 2) {

            p2_bull_marks++;
            p2_bull_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            if (!p1_bull_closed) {
                document.getElementById('p2-bull').className = "far fa-times-circle text-success";
            } else if (p1_bull_closed && p2_bull_closed) {
                document.getElementById('p2-bull').className = "far fa-times-circle text-danger";
                document.getElementById('p1-bull').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_bull_marks >= 3 && !p1_bull_closed) {
            document.getElementById('p2-bull').className = "far fa-times-circle text-success";

            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 25;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_bull_marks >= 3 && p1_bull_closed) {
            document.getElementById('p2-bull').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}


// Doubles 

function double20() {

    if (turn === 'player1') {

        if (p1_20_marks === 0) {
            document.getElementById('p1-20').className = "fas fa-times";
            p1_20_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_20_marks === 1) {

            p1_20_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_20_closed = true;

            if (!p2_20_closed) {
                document.getElementById('p1-20').className = "far fa-times-circle text-success";
            } else if (p1_20_closed && p2_20_closed) {
                document.getElementById('p1-20').className = "far fa-times-circle text-danger";
                document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_20_marks === 2 && !p2_20_closed) {
            p1_20_marks += 2;
            p1_20_closed = true;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 20;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-20').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_20_marks === 2 && p2_20_closed) {
            p1_20_marks += 2;
            p1_20_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-20').className = "far fa-times-circle text-danger";
            document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_20_marks >= 3 && !p2_20_closed) {
            document.getElementById('p1-20').className = "far fa-times-circle text-success";
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 40;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_20_marks >= 3 && p2_20_closed) {
            document.getElementById('p1-20').className = "far fa-times-circle text-danger";
            document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_20_marks === 0) {
            document.getElementById('p2-20').className = "fas fa-times";
            p2_20_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_20_marks === 1) {

            p2_20_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_20_closed = true;

            if (!p1_20_closed) {
                document.getElementById('p2-20').className = "far fa-times-circle text-success";
            } else if (p1_20_closed && p2_20_closed) {
                document.getElementById('p1-20').className = "far fa-times-circle text-danger";
                document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            }

            removeDart();
            checkWin();

        } else if (p2_20_marks === 2 && !p1_20_closed) {
            p2_20_marks += 2;
            p2_20_closed = true;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 20;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-20').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_20_marks === 2 && p1_20_closed) {
            p2_20_marks += 2;
            p2_20_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-20').className = "far fa-times-circle text-danger";
            document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_20_marks >= 3 && !p1_20_closed) {
            document.getElementById('p2-20').className = "far fa-times-circle text-success";
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 40;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_20_marks >= 3 && p1_20_closed) {
            document.getElementById('p1-20').className = "far fa-times-circle text-danger";
            document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function double19() {
    if (turn === 'player1') {

        if (p1_19_marks === 0) {
            document.getElementById('p1-19').className = "fas fa-times";
            p1_19_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_19_marks === 1) {

            p1_19_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_19_closed = true;

            if (!p2_19_closed) {
                document.getElementById('p1-19').className = "far fa-times-circle text-success";
            } else if (p1_19_closed && p2_19_closed) {
                document.getElementById('p1-19').className = "far fa-times-circle text-danger";
                document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_19_marks === 2 && !p2_19_closed) {
            p1_19_marks += 2;
            p1_19_closed = true;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 19;
            document.getElementById('p1-points').innerHTML = p1_score;

            document.getElementById('p1-19').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_19_marks === 2 && p2_19_closed) {
            p1_19_marks += 2;
            p1_19_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-19').className = "far fa-times-circle text-danger";
            document.getElementById('p2-19').className = "far fa-times-circle text-danger";

            removeDart();
            checkWin();

        } else if (p1_19_marks >= 3 && !p2_19_closed) {
            document.getElementById('p1-19').className = "far fa-times-circle text-success";
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 38;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_19_marks >= 3 && p2_19_closed) {
            document.getElementById('p1-19').className = "far fa-times-circle text-danger";
            document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_19_marks === 0) {
            document.getElementById('p2-19').className = "fas fa-times";
            p2_19_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_19_marks === 1) {

            p2_19_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_19_closed = true;

            if (!p1_19_closed) {
                document.getElementById('p2-19').className = "far fa-times-circle text-success";
            } else if (p1_19_closed && p2_19_closed) {
                document.getElementById('p1-19').className = "far fa-times-circle text-danger";
                document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_19_marks === 2 && !p1_19_closed) {
            p2_19_marks += 2;
            p2_19_closed = true;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 19;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-19').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_19_marks === 2 && p1_19_closed) {
            p2_19_marks += 2;
            p2_19_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-19').className = "far fa-times-circle text-danger";
            document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_19_marks >= 3 && !p1_19_closed) {
            document.getElementById('p2-19').className = "far fa-times-circle text-success";
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 38;

            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_19_marks >= 3 && p1_19_closed) {
            document.getElementById('p1-19').className = "far fa-times-circle text-danger";
            document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function double18() {

    if (turn === 'player1') {

        if (p1_18_marks === 0) {
            document.getElementById('p1-18').className = "fas fa-times";
            p1_18_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_18_marks === 1) {

            p1_18_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_18_closed = true;

            if (!p2_18_closed) {
                document.getElementById('p1-18').className = "far fa-times-circle text-success";
            } else if (p1_18_closed && p2_18_closed) {
                document.getElementById('p1-18').className = "far fa-times-circle text-danger";
                document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_18_marks === 2 && !p2_18_closed) {
            p1_18_marks += 2;
            p1_18_closed = true;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 18;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-18').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_18_marks === 2 && p2_18_closed) {
            p1_18_marks += 2;
            p1_18_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-18').className = "far fa-times-circle text-danger";
            document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_18_marks >= 3 && !p2_18_closed) {
            document.getElementById('p1-18').className = "far fa-times-circle text-success";
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 36;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_18_marks >= 3 && p2_18_closed) {
            document.getElementById('p1-18').className = "far fa-times-circle text-danger";
            document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_18_marks === 0) {
            document.getElementById('p2-18').className = "fas fa-times";
            p2_18_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_18_marks === 1) {

            p2_18_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_18_closed = true;

            if (!p1_18_closed) {
                document.getElementById('p2-18').className = "far fa-times-circle text-success";
            } else if (p1_18_closed && p2_18_closed) {
                document.getElementById('p1-18').className = "far fa-times-circle text-danger";
                document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_18_marks === 2 && !p1_18_closed) {
            p2_18_marks += 2;
            p2_18_closed = true;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 18;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-18').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_18_marks === 2 && p1_18_closed) {
            p2_18_marks += 2;
            p2_18_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-18').className = "far fa-times-circle text-danger";
            document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_18_marks >= 3 && !p1_18_closed) {
            document.getElementById('p2-18').className = "far fa-times-circle text-success";
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 36;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_18_marks >= 3 && p1_18_closed) {
            document.getElementById('p1-18').className = "far fa-times-circle text-danger";
            document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function double17() {

    if (turn === 'player1') {

        if (p1_17_marks === 0) {
            document.getElementById('p1-17').className = "fas fa-times";
            p1_17_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_17_marks === 1) {

            p1_17_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_17_closed = true;

            if (!p2_17_closed) {
                document.getElementById('p1-17').className = "far fa-times-circle text-success";
            } else if (p1_17_closed && p2_17_closed) {
                document.getElementById('p1-17').className = "far fa-times-circle text-danger";
                document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_17_marks === 2 && !p2_17_closed) {
            p1_17_marks += 2;
            p1_17_closed = true;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 17;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-17').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_17_marks === 2 && p2_17_closed) {
            p1_17_marks += 2;
            p1_17_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-17').className = "far fa-times-circle text-danger";
            document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_17_marks >= 3 && !p2_17_closed) {
            document.getElementById('p1-17').className = "far fa-times-circle text-success";
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 34;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_17_marks >= 3 && p2_17_closed) {
            document.getElementById('p1-17').className = "far fa-times-circle text-danger";
            document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_17_marks === 0) {
            document.getElementById('p2-17').className = "fas fa-times";
            p2_17_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_17_marks === 1) {

            p2_17_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_17_closed = true;

            if (!p1_17_closed) {
                document.getElementById('p2-17').className = "far fa-times-circle text-success";
            } else if (p1_17_closed && p2_17_closed) {
                document.getElementById('p1-17').className = "far fa-times-circle text-danger";
                document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_17_marks === 2 && !p1_17_closed) {
            p2_17_marks += 2;
            p2_17_closed = true;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 17;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-17').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_17_marks === 2 && p1_17_closed) {
            p2_17_marks += 2;
            p2_17_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-17').className = "far fa-times-circle text-danger";
            document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_17_marks >= 3 && !p1_17_closed) {
            document.getElementById('p2-17').className = "far fa-times-circle text-success";
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 34;

            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_17_marks >= 3 && p1_17_closed) {
            document.getElementById('p1-17').className = "far fa-times-circle text-danger";
            document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function double16() {

    if (turn === 'player1') {

        if (p1_16_marks === 0) {
            document.getElementById('p1-16').className = "fas fa-times";
            p1_16_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_16_marks === 1) {

            p1_16_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_16_closed = true;

            if (!p2_16_closed) {
                document.getElementById('p1-16').className = "far fa-times-circle text-success";
            } else if (p1_16_closed && p2_16_closed) {
                document.getElementById('p1-16').className = "far fa-times-circle text-danger";
                document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_16_marks === 2 && !p2_16_closed) {
            p1_16_marks += 2;
            p1_16_closed = true;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 16;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-16').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_16_marks === 2 && p2_16_closed) {
            p1_16_marks += 2;
            p1_16_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-16').className = "far fa-times-circle text-danger";
            document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_16_marks >= 3 && !p2_16_closed) {
            document.getElementById('p1-16').className = "far fa-times-circle text-success";
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 32;

            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_16_marks >= 3 && p2_16_closed) {
            document.getElementById('p1-16').className = "far fa-times-circle text-danger";
            document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_16_marks === 0) {
            document.getElementById('p2-16').className = "fas fa-times";
            p2_16_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_16_marks === 1) {

            p2_16_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_16_closed = true;

            if (!p1_16_closed) {
                document.getElementById('p2-16').className = "far fa-times-circle text-success";
            } else if (p1_16_closed && p2_16_closed) {
                document.getElementById('p1-16').className = "far fa-times-circle text-danger";
                document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_16_marks === 2 && !p1_16_closed) {
            p2_16_marks += 2;
            p2_16_closed = true;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 16;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-16').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_16_marks === 2 && p1_16_closed) {
            p2_16_marks += 2;
            p2_16_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-16').className = "far fa-times-circle text-danger";
            document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_16_marks >= 3 && !p1_16_closed) {
            document.getElementById('p2-16').className = "far fa-times-circle text-success";
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 32;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_16_marks >= 3 && p1_16_closed) {
            document.getElementById('p1-16').className = "far fa-times-circle text-danger";
            document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function double15() {

    if (turn === 'player1') {

        if (p1_15_marks === 0) {
            document.getElementById('p1-15').className = "fas fa-times";
            p1_15_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_15_marks === 1) {

            p1_15_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_15_closed = true;

            if (!p2_15_closed) {
                document.getElementById('p1-15').className = "far fa-times-circle text-success";
            } else if (p1_15_closed && p2_15_closed) {
                document.getElementById('p1-15').className = "far fa-times-circle text-danger";
                document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            }

            removeDart();
            checkWin();

        } else if (p1_15_marks === 2 && !p2_15_closed) {
            p1_15_marks += 2;
            p1_15_closed = true;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 15;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-15').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_15_marks === 2 && p2_15_closed) {
            p1_15_marks += 2;
            p1_15_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-15').className = "far fa-times-circle text-danger";
            document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_15_marks >= 3 && !p2_15_closed) {
            document.getElementById('p1-15').className = "far fa-times-circle text-success";
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 30;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_15_marks >= 3 && p2_15_closed) {
            document.getElementById('p1-15').className = "far fa-times-circle text-danger";
            document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_15_marks === 0) {
            document.getElementById('p2-15').className = "fas fa-times";
            p2_15_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_15_marks === 1) {

            p2_15_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_15_closed = true;

            if (!p1_15_closed) {
                document.getElementById('p2-15').className = "far fa-times-circle text-success";
            } else if (p1_15_closed && p2_15_closed) {
                document.getElementById('p1-15').className = "far fa-times-circle text-danger";
                document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_15_marks === 2 && !p1_15_closed) {
            p2_15_marks += 2;
            p2_15_closed = true;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 15;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-15').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_15_marks === 2 && p1_15_closed) {
            p2_15_marks += 2;
            p2_15_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-15').className = "far fa-times-circle text-danger";
            document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_15_marks >= 3 && !p1_15_closed) {
            document.getElementById('p2-15').className = "far fa-times-circle text-success";
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 30;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_15_marks >= 3 && p1_15_closed) {
            document.getElementById('p1-15').className = "far fa-times-circle text-danger";
            document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function doubleBull() {

    if (turn === 'player1') {

        if (p1_bull_marks === 0) {
            document.getElementById('p1-bull').className = "fas fa-times";
            p1_bull_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();

        } else if (p1_bull_marks === 1) {

            p1_bull_marks += 2;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_bull_closed = true;

            if (!p2_bull_closed) {
                document.getElementById('p1-bull').className = "far fa-times-circle text-success";
            } else if (p1_bull_closed && p2_bull_closed) {
                document.getElementById('p1-bull').className = "far fa-times-circle text-danger";
                document.getElementById('p2-bull').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_bull_marks === 2 && !p2_bull_closed) {
            p1_bull_marks += 2;
            p1_bull_closed = true;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 25;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-bull').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_bull_marks === 2 && p2_bull_closed) {
            p1_bull_marks += 2;
            p1_bull_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-bull').className = "far fa-times-circle text-danger";
            document.getElementById('p2-bull').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_bull_marks >= 3 && !p2_bull_closed) {
            document.getElementById('p1-bull').className = "far fa-times-circle text-success";
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 50;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_bull_marks >= 3 && p2_bull_closed) {
            document.getElementById('p1-bull').className = "far fa-times-circle text-danger";
            document.getElementById('p2-bull').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_bull_marks === 0) {
            document.getElementById('p2-bull').className = "fas fa-times";
            p2_bull_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();

        } else if (p2_bull_marks === 1) {

            p2_bull_marks += 2;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_bull_closed = true;

            if (!p1_bull_closed) {
                document.getElementById('p2-bull').className = "far fa-times-circle text-success";
            } else if (p1_bull_closed && p2_bull_closed) {
                document.getElementById('p1-bull').className = "far fa-times-circle text-danger";
                document.getElementById('p2-bull').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_bull_marks === 2 && !p1_bull_closed) {
            p2_bull_marks += 2;
            p2_bull_closed = true;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 25;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-bull').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_bull_marks === 2 && p1_bull_closed) {
            p2_bull_marks += 2;
            p2_bull_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-bull').className = "far fa-times-circle text-danger";
            document.getElementById('p2-bull').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_bull_marks >= 3 && !p1_bull_closed) {
            document.getElementById('p2-bull').className = "far fa-times-circle text-success";
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 50;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_bull_marks >= 3 && p1_bull_closed) {
            document.getElementById('p1-bull').className = "far fa-times-circle text-danger";
            document.getElementById('p2-bull').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

// Triples
function triple20() {

    if (turn === 'player1') {

        if (p1_20_marks === 0) {

            p1_20_marks += 3;
            p1_20_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;

            if (!p2_20_closed) {
                document.getElementById('p1-20').className = "far fa-times-circle text-success";
            } else if (p1_20_closed && p2_20_closed) {
                document.getElementById('p1-20').className = "far fa-times-circle text-danger";
                document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_20_marks === 1 && !p2_20_closed) {

            p1_20_marks += 3;
            p1_20_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 20;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-20').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_20_marks === 1 && p2_20_closed) {

            p1_20_marks += 2;
            p1_20_closed = true;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-20').className = "far fa-times-circle text-danger";
            document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_20_marks === 2 && !p2_20_closed) {
            p1_20_marks += 3;
            p1_20_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 40;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-20').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_20_marks === 2 && p2_20_closed) {
            p1_20_marks += 1;
            p1_20_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-20').className = "far fa-times-circle text-danger";
            document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_20_marks >= 3 && !p2_20_closed) {
            document.getElementById('p1-20').className = "far fa-times-circle text-success";
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 60;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_20_marks >= 3 && p2_20_closed) {
            document.getElementById('p1-20').className = "far fa-times-circle text-danger";
            document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_20_marks === 0) {

            p2_20_marks += 3;
            p2_20_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;

            if (!p1_20_closed) {
                document.getElementById('p2-20').className = "far fa-times-circle text-success";
            } else if (p2_20_closed && p1_20_closed) {
                document.getElementById('p1-20').className = "far fa-times-circle text-danger";
                document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_20_marks === 1 && !p1_20_closed) {

            p2_20_marks += 3;
            p2_20_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 20;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-20').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_20_marks === 1 && p1_20_closed) {

            p2_20_marks += 2;
            p2_20_closed = true;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-20').className = "far fa-times-circle text-danger";
            document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_20_marks === 2 && !p1_20_closed) {
            p2_20_marks += 3;
            p2_20_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 40;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-20').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_20_marks === 2 && p1_20_closed) {
            p2_20_marks += 1;
            p2_20_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-20').className = "far fa-times-circle text-danger";
            document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_20_marks >= 3 && !p1_20_closed) {
            document.getElementById('p2-20').className = "far fa-times-circle text-success";
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 60;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_20_marks >= 3 && p1_20_closed) {
            document.getElementById('p1-20').className = "far fa-times-circle text-danger";
            document.getElementById('p2-20').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function triple19() {

    if (turn === 'player1') {

        if (p1_19_marks === 0) {

            p1_19_marks += 3;
            p1_19_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;

            if (!p2_19_closed) {
                document.getElementById('p1-19').className = "far fa-times-circle text-success";
            } else if (p1_19_closed && p2_19_closed) {
                document.getElementById('p1-19').className = "far fa-times-circle text-danger";
                document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_19_marks === 1 && !p2_19_closed) {

            p1_19_marks += 3;
            p1_19_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 19;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-19').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_19_marks === 1 && p2_19_closed) {

            p1_19_marks += 2;
            p1_19_closed = true;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-19').className = "far fa-times-circle text-danger";
            document.getElementById('p2-19').className = "far fa-times-circle text-danger";

            removeDart();
            checkWin();

        } else if (p1_19_marks === 2 && !p2_19_closed) {
            p1_19_marks += 3;
            p1_19_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 38;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-19').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_19_marks === 2 && p2_19_closed) {
            p1_19_marks += 1;
            p1_19_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-19').className = "far fa-times-circle text-danger";
            document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_19_marks >= 3 && !p2_19_closed) {
            document.getElementById('p1-19').className = "far fa-times-circle text-success";
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 57;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_19_marks >= 3 && p2_19_closed) {
            document.getElementById('p1-19').className = "far fa-times-circle text-danger";
            document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_19_marks === 0) {

            p2_19_marks += 3;
            p2_19_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;

            if (!p1_19_closed) {
                document.getElementById('p2-19').className = "far fa-times-circle text-success";
            } else if (p2_19_closed && p1_19_closed) {
                document.getElementById('p1-19').className = "far fa-times-circle text-danger";
                document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_19_marks === 1 && !p1_19_closed) {

            p2_19_marks += 3;
            p2_19_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 19;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-19').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_19_marks === 1 && p1_19_closed) {

            p2_19_marks += 2;
            p2_19_closed = true;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-19').className = "far fa-times-circle text-danger";
            document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_19_marks === 2 && !p1_19_closed) {
            p2_19_marks += 3;
            p2_19_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 38;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-19').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_19_marks === 2 && p1_19_closed) {
            p2_19_marks += 1;
            p2_19_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-19').className = "far fa-times-circle text-danger";
            document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_19_marks >= 3 && !p1_19_closed) {
            document.getElementById('p2-19').className = "far fa-times-circle text-success";
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 57;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_19_marks >= 3 && p1_19_closed) {
            document.getElementById('p1-19').className = "far fa-times-circle text-danger";
            document.getElementById('p2-19').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function triple18() {

    if (turn === 'player1') {

        if (p1_18_marks === 0) {

            p1_18_marks += 3;
            p1_18_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;

            if (!p2_18_closed) {
                document.getElementById('p1-18').className = "far fa-times-circle text-success";
            } else if (p1_18_closed && p2_18_closed) {
                document.getElementById('p1-18').className = "far fa-times-circle text-danger";
                document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_18_marks === 1 && !p2_18_closed) {

            p1_18_marks += 3;
            p1_18_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 18;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-18').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_18_marks === 1 && p2_18_closed) {

            p1_18_marks += 2;
            p1_18_closed = true;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-18').className = "far fa-times-circle text-danger";
            document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_18_marks === 2 && !p2_18_closed) {
            p1_18_marks += 3;
            p1_18_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 36;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-18').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_18_marks === 2 && p2_18_closed) {
            p1_18_marks += 1;
            p1_18_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-18').className = "far fa-times-circle text-danger";
            document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_18_marks >= 3 && !p2_18_closed) {
            document.getElementById('p1-18').className = "far fa-times-circle text-success";
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 54;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_18_marks >= 3 && p2_18_closed) {
            document.getElementById('p1-18').className = "far fa-times-circle text-danger";
            document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_18_marks === 0) {

            p2_18_marks += 3;
            p2_18_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;

            if (!p1_18_closed) {
                document.getElementById('p2-18').className = "far fa-times-circle text-success";
            } else if (p2_18_closed && p1_18_closed) {
                document.getElementById('p1-18').className = "far fa-times-circle text-danger";
                document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_18_marks === 1 && !p1_18_closed) {

            p2_18_marks += 3;
            p2_18_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 18;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-18').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_18_marks === 1 && p1_18_closed) {

            p2_18_marks += 2;
            p2_18_closed = true;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-18').className = "far fa-times-circle text-danger";
            document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_18_marks === 2 && !p1_18_closed) {
            p2_18_marks += 3;
            p2_18_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 36;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-18').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_18_marks === 2 && p1_18_closed) {
            p2_18_marks += 1;
            p2_18_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-18').className = "far fa-times-circle text-danger";
            document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_18_marks >= 3 && !p1_18_closed) {
            document.getElementById('p2-18').className = "far fa-times-circle text-success";
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 54;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_18_marks >= 3 && p1_18_closed) {
            document.getElementById('p1-18').className = "far fa-times-circle text-danger";
            document.getElementById('p2-18').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function triple17() {

    if (turn === 'player1') {

        if (p1_17_marks === 0) {

            p1_17_marks += 3;
            p1_17_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;

            if (!p2_17_closed) {
                document.getElementById('p1-17').className = "far fa-times-circle text-success";
            } else if (p1_17_closed && p2_17_closed) {
                document.getElementById('p1-17').className = "far fa-times-circle text-danger";
                document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_17_marks === 1 && !p2_17_closed) {

            p1_17_marks += 3;
            p1_17_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 17;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-17').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_17_marks === 1 && p2_17_closed) {

            p1_17_marks += 2;
            p1_17_closed = true;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-17').className = "far fa-times-circle text-danger";
            document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_17_marks === 2 && !p2_17_closed) {
            p1_17_marks += 3;
            p1_17_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 34;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-17').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_17_marks === 2 && p2_17_closed) {
            p1_17_marks += 1;
            p1_17_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-17').className = "far fa-times-circle text-danger";
            document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_17_marks >= 3 && !p2_17_closed) {
            document.getElementById('p1-17').className = "far fa-times-circle text-success";
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 51;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_17_marks >= 3 && p2_17_closed) {
            document.getElementById('p1-17').className = "far fa-times-circle text-danger";
            document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_17_marks === 0) {

            p2_17_marks += 3;
            p2_17_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;

            if (!p1_17_closed) {
                document.getElementById('p2-17').className = "far fa-times-circle text-success";
            } else if (p2_17_closed && p1_17_closed) {
                document.getElementById('p1-17').className = "far fa-times-circle text-danger";
                document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_17_marks === 1 && !p1_17_closed) {

            p2_17_marks += 3;
            p2_17_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 17;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-17').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_17_marks === 1 && p1_17_closed) {

            p2_17_marks += 2;
            p2_17_closed = true;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-17').className = "far fa-times-circle text-danger";
            document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_17_marks === 2 && !p1_17_closed) {
            p2_17_marks += 3;
            p2_17_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 34;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-17').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_17_marks === 2 && p1_17_closed) {
            p2_17_marks += 1;
            p2_17_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-17').className = "far fa-times-circle text-danger";
            document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_17_marks >= 3 && !p1_17_closed) {
            document.getElementById('p2-17').className = "far fa-times-circle text-success";
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 51;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_17_marks >= 3 && p1_17_closed) {
            document.getElementById('p1-17').className = "far fa-times-circle text-danger";
            document.getElementById('p2-17').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function triple16() {

    if (turn === 'player1') {

        if (p1_16_marks === 0) {

            p1_16_marks += 3;
            p1_16_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;

            if (!p2_16_closed) {
                document.getElementById('p1-16').className = "far fa-times-circle text-success";
            } else if (p1_16_closed && p2_16_closed) {
                document.getElementById('p1-16').className = "far fa-times-circle text-danger";
                document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_16_marks === 1 && !p2_16_closed) {

            p1_16_marks += 3;
            p1_16_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 16;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-16').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_16_marks === 1 && p2_16_closed) {

            p1_16_marks += 2;
            p1_16_closed = true;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-16').className = "far fa-times-circle text-danger";
            document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_16_marks === 2 && !p2_16_closed) {
            p1_16_marks += 3;
            p1_16_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 32;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-16').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_16_marks === 2 && p2_16_closed) {
            p1_16_marks += 1;
            p1_16_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-16').className = "far fa-times-circle text-danger";
            document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_16_marks >= 3 && !p2_16_closed) {
            document.getElementById('p1-16').className = "far fa-times-circle text-success";
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 48;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_16_marks >= 3 && p2_16_closed) {
            document.getElementById('p1-16').className = "far fa-times-circle text-danger";
            document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_16_marks === 0) {

            p2_16_marks += 3;
            p2_16_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;

            if (!p1_16_closed) {
                document.getElementById('p2-16').className = "far fa-times-circle text-success";
            } else if (p2_16_closed && p1_16_closed) {
                document.getElementById('p1-16').className = "far fa-times-circle text-danger";
                document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_16_marks === 1 && !p1_16_closed) {

            p2_16_marks += 3;
            p2_16_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 16;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-16').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_16_marks === 1 && p1_16_closed) {

            p2_16_marks += 2;
            p2_16_closed = true;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-16').className = "far fa-times-circle text-danger";
            document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_16_marks === 2 && !p1_16_closed) {
            p2_16_marks += 3;
            p2_16_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 32;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-16').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_16_marks === 2 && p1_16_closed) {
            p2_16_marks += 1;
            p2_16_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-16').className = "far fa-times-circle text-danger";
            document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_16_marks >= 3 && !p1_16_closed) {
            document.getElementById('p2-16').className = "far fa-times-circle text-success";
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 48;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_16_marks >= 3 && p1_16_closed) {
            document.getElementById('p1-16').className = "far fa-times-circle text-danger";
            document.getElementById('p2-16').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

function triple15() {

    if (turn === 'player1') {

        if (p1_15_marks === 0) {

            p1_15_marks += 3;
            p1_15_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;

            if (!p2_15_closed) {
                document.getElementById('p1-15').className = "far fa-times-circle text-success";
            } else if (p1_15_closed && p2_15_closed) {
                document.getElementById('p1-15').className = "far fa-times-circle text-danger";
                document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p1_15_marks === 1 && !p2_15_closed) {

            p1_15_marks += 3;
            p1_15_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 15;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-15').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_15_marks === 1 && p2_15_closed) {

            p1_15_marks += 2;
            p1_15_closed = true;
            p1_total_marks += 2;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-15').className = "far fa-times-circle text-danger";
            document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_15_marks === 2 && !p2_15_closed) {
            p1_15_marks += 3;
            p1_15_closed = true;
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 30;

            document.getElementById('p1-points').innerHTML = p1_score;
            document.getElementById('p1-15').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p1_15_marks === 2 && p2_15_closed) {
            p1_15_marks += 1;
            p1_15_closed = true;
            p1_total_marks++;
            p1_round_darts++;
            p1_total_darts++;

            document.getElementById('p1-15').className = "far fa-times-circle text-danger";
            document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p1_15_marks >= 3 && !p2_15_closed) {
            document.getElementById('p1-15').className = "far fa-times-circle text-success";
            p1_total_marks += 3;
            p1_round_darts++;
            p1_total_darts++;
            p1_score += 45;
            document.getElementById('p1-points').innerHTML = p1_score;
            removeDart();
            checkWin();

        } else if (p1_15_marks >= 3 && p2_15_closed) {
            document.getElementById('p1-15').className = "far fa-times-circle text-danger";
            document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            p1_round_darts++;
            p1_total_darts++;
            removeDart();
            checkWin();
        }
    }

    else {

        if (p2_15_marks === 0) {

            p2_15_marks += 3;
            p2_15_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;

            if (!p1_15_closed) {
                document.getElementById('p2-15').className = "far fa-times-circle text-success";
            } else if (p2_15_closed && p1_15_closed) {
                document.getElementById('p1-15').className = "far fa-times-circle text-danger";
                document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            }
            removeDart();
            checkWin();

        } else if (p2_15_marks === 1 && !p1_15_closed) {

            p2_15_marks += 3;
            p2_15_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 15;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-15').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_15_marks === 1 && p1_15_closed) {

            p2_15_marks += 2;
            p2_15_closed = true;
            p2_total_marks += 2;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-15').className = "far fa-times-circle text-danger";
            document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_15_marks === 2 && !p1_15_closed) {
            p2_15_marks += 3;
            p2_15_closed = true;
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 30;

            document.getElementById('p2-points').innerHTML = p2_score;
            document.getElementById('p2-15').className = "far fa-times-circle text-success";
            removeDart();
            checkWin();

        } else if (p2_15_marks === 2 && p1_15_closed) {
            p2_15_marks += 1;
            p2_15_closed = true;
            p2_total_marks++;
            p2_round_darts++;
            p2_total_darts++;

            document.getElementById('p1-15').className = "far fa-times-circle text-danger";
            document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            removeDart();
            checkWin();

        } else if (p2_15_marks >= 3 && !p1_15_closed) {
            document.getElementById('p2-15').className = "far fa-times-circle text-success";
            p2_total_marks += 3;
            p2_round_darts++;
            p2_total_darts++;
            p2_score += 45;
            document.getElementById('p2-points').innerHTML = p2_score;
            removeDart();
            checkWin();

        } else if (p2_15_marks >= 3 && p1_15_closed) {
            document.getElementById('p1-15').className = "far fa-times-circle text-danger";
            document.getElementById('p2-15').className = "far fa-times-circle text-danger";
            p2_round_darts++;
            p2_total_darts++;
            removeDart();
            checkWin();
        }
    }
}

startGame();

