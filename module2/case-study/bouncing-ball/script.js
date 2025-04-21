const grid = document.querySelector(".grid");

const scoreDisplay = document.querySelector("#score");
const ballSpeedDisplay = document.querySelector("#ballSpeed");

const blockWidth = 100;
const blockHeight = 20;

const ballDiameter = 20;

const boardWidth = 1660;
const boardHeight = 900;

const userWidth = 200;
const userHeight = 20;

let timerId;
let xDirection = 1;
let yDirection = 1;
let score = 0;

const userStart = [(boardWidth-100)/2, 10];
let currentPosition = userStart;

const ballStart = [(boardWidth)/2-10, 30];
let ballCurrentPosition = ballStart;

let ballSpeedMultiplier = 3;

let gameOver = false;
let stageCleared = false;
let currentStage = 1;

const paddleHitSound = new Audio('sounds/616495__empiremonkey__block1.wav');
const wallHitSound = new Audio('sounds/161593__jorickhoofd__soft-hit-wooden-block-and-sandish-noise.wav');
const blockHitSound1 = new Audio('sounds/219161__jagadamba__frogblock01.wav');
const blockHitSound2 = new Audio('sounds/53387__dodgy-c__dodgy_c_wood_block.wav');
//create block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}
//all the blocks
const blocks = [
    // new Block(120, 870),
    // new Block(230, 870),
    // new Block(340, 870),
    // new Block(450, 870),
    // new Block(560, 870),
    // new Block(670, 870),
    // new Block(780, 870),
    // new Block(890, 870),
    // new Block(1000, 870),
    // new Block(1110, 870),
    // new Block(1220, 870),
    // new Block(1330, 870),
    // new Block(1440,870),
    //
    // new Block(120, 840),
    // new Block(230, 840),
    // new Block(340, 840),
    // new Block(450, 840),
    // new Block(560, 840),
    // new Block(670, 840),
    // new Block(780, 840),
    // new Block(890, 840),
    // new Block(1000, 840),
    // new Block(1110, 840),
    // new Block(1220, 840),
    // new Block(1330, 840),
    // new Block(1440,840),
    //
    // new Block(120, 810),
    // new Block(230, 810),
    // new Block(340, 810),
    // new Block(450, 810),
    // new Block(560, 810),
    // new Block(670, 810),
    // new Block(780, 810),
    // new Block(890, 810),
    // new Block(1000, 810),
    // new Block(1110, 810),
    // new Block(1220, 810),
    // new Block(1330, 810),
    // new Block(1440,810),

    new Block(1550,870)
]

//add block to grid
function addBlocks() {

    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.left = blocks[i].bottomLeft[0] + "px";
        block.style.bottom = blocks[i].bottomLeft[1] + "px";
        grid.appendChild(block);
    }
}

addBlocks()

//add user
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

//draw user
function drawUser() {
    user.style.left = currentPosition[0] + "px";
    user.style.bottom = currentPosition[1] + "px";
}

//draw ball
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + "px";
    ball.style.bottom = ballCurrentPosition[1] + "px";
}
//move user
function moveUser(e) {
    switch (e.key) {
        case "ArrowLeft":
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 100;
                drawUser();

            }
            break;
        case "ArrowRight":
            if (currentPosition[0] < boardWidth - userWidth) {
                currentPosition[0] += 100;
                drawUser();
            }
            break;
    }
}

document.addEventListener("keydown", moveUser);

//add ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

//move ball
function moveBall() {
    if (gameStarted) {
        if (score === 0) {
            ballSpeedMultiplier=1;
        } else if (score === 4) {
            ballSpeedMultiplier=1.5;
        } else if (score === 10) {
            ballSpeedMultiplier=2;
        } else if (score === 24) {
            ballSpeedMultiplier=2.5
        } else if  (score === 35) {
            ballSpeedMultiplier=3;
        } else if (score === 45) {
            ballSpeedMultiplier=3.5;
        } else if (score === 60) {
            ballSpeedMultiplier=4;
        }
        ballSpeedDisplay.innerHTML = ballSpeedMultiplier;
        ballCurrentPosition[0] += xDirection*ballSpeedMultiplier;
        ballCurrentPosition[1] += yDirection*ballSpeedMultiplier;
        drawBall();
        checkForCollision();
    }

}

timerId = setInterval(moveBall, 1);

//play sound
function playRandomBlockHitSound() {
    const sounds = [blockHitSound1, blockHitSound2];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];

    randomSound.currentTime = 0; // Restart if it's already playing
    randomSound.play().catch(() => {}); // Catch in case autoplay fails
}

//check for collision
function checkForCollision() {
    //check for block collision
    for (let i = 0; i < blocks.length; i++) {
        if (
            (ballCurrentPosition[0] + ballDiameter) >= blocks[i].bottomLeft[0] &&
            ballCurrentPosition[0] <= blocks[i].bottomRight[0] &&
            (ballCurrentPosition[1] + ballDiameter) >= blocks[i].bottomLeft[1] &&
            ballCurrentPosition[1] <= blocks[i].topLeft[1]
        ) {

            playRandomBlockHitSound()
            const allBlocks = Array.from(document.querySelectorAll(".block"));
            allBlocks[i].classList.remove("block");
            blocks.splice(i, 1);
            changeDirection();
            score++;
            scoreDisplay.innerHTML = score;

            //check for win
            if (blocks.length === 0) {
                stageCleared = true;
                clearInterval(timerId);
                // scoreDisplay.innerHTML = "You Win!";
                document.removeEventListener("keydown", moveUser);
                grid.removeEventListener("mousemove", moveUserWithMouse);
                document.getElementById('winOverlay').style.display = 'flex';
                const winMessage = document.getElementById('winMessage');
                winMessage.innerText = `You cleared Stage ${currentStage}
                Get ready for Stage ${currentStage + 1}!`;
                setTimeout(()=> {
                    document.getElementById('winOverlay').style.display = 'none';
                    currentStage++;
                    // startStageTwo();
                    updateStageUI();
                    stageCleared = false;
                }, 3000);
            }
        }
    }

    //Start stage two
    function startStageTwo() {
        // Clear all current blocks from DOM
        document.querySelectorAll(".block").forEach(block => block.remove());

        // New block layout (you can change this!)
        blocks.length = 0;
        const newBlocks = [
            new Block(120, 870),
            new Block(230, 870),
            new Block(340, 870),
            new Block(450, 870),
            new Block(560, 870),
            new Block(670, 870),
            new Block(780, 870),
            new Block(890, 870),
            new Block(1000, 870),
            new Block(1110, 870),
            new Block(1220, 870),
            new Block(1330, 870),
            new Block(1440,870),

            new Block(120, 840),
            new Block(230, 840),
            new Block(340, 840),
            new Block(450, 840),
            new Block(560, 840),
            new Block(670, 840),
            new Block(780, 840),
            new Block(890, 840),
            new Block(1000, 840),
            new Block(1110, 840),
            new Block(1220, 840),
            new Block(1330, 840),
            new Block(1440,840),

            new Block(120, 810),
            new Block(230, 810),
            new Block(340, 810),
            new Block(450, 810),
            new Block(560, 810),
            new Block(670, 810),
            new Block(780, 810),
            new Block(890, 810),
            new Block(1000, 810),
            new Block(1110, 810),
            new Block(1220, 810),
            new Block(1330, 810),
            new Block(1440,810),
        ];
        blocks.push(...newBlocks);

        addBlocks(); // re-add to DOM

        currentPosition = [(boardWidth - userWidth) / 2, 10];
        drawUser();

        // 4. Reset ball position + direction
        ballCurrentPosition = [(boardWidth) / 2 - ballDiameter / 2, 30];
        xDirection = 1;
        yDirection = 1;
        drawBall();

        // 5. Restart ball movement
        clearInterval(timerId);

        timerId = setInterval(moveBall, 1);
        document.addEventListener("keydown", moveUser);
        grid.addEventListener("mousemove", moveUserWithMouse);

    }

    //check for wall collision
    if (
        ballCurrentPosition[0] >= (boardWidth - ballDiameter) ||
        ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
        ballCurrentPosition[0] <= 0 ||
        ballCurrentPosition[1] <= 0
    ) {
        wallHitSound.curentTime = 0; // Rewind to start
        wallHitSound.play();
       changeDirection();
    }

    //check for user collision
    if (
        (ballCurrentPosition[0] + ballDiameter) > currentPosition[0] &&
        ballCurrentPosition[0] < currentPosition[0] + userWidth &&
        ballCurrentPosition[1] > currentPosition[1] &&
        ballCurrentPosition[1] < currentPosition[1] + userHeight
    ) {
        paddleHitSound.currentTime = 0; // Rewind to start
        paddleHitSound.play();
        changeDirection();
    }

    //check for game over
    if (ballCurrentPosition[1] <= 0) {
        gameOver = true;
        clearInterval(timerId);
        // scoreDisplay.innerHTML = "Game Over";
        document.removeEventListener("keydown", moveUser);
        grid.removeEventListener("mousemove", moveUserWithMouse);
        const gameOverOverlay = document.getElementById('gameOverOverlay');
        gameOverOverlay.style.display = 'flex'
        setTimeout(() => {
            const playerName = prompt("Game Over! Enter your name for the leaderboard:");
            if (playerName) {
                saveScore(playerName);
            }
        }, 500);
    }
}

function changeDirection() {
    if (xDirection === 1 && yDirection === 1) {
        yDirection = -1;
        return;
    }
    if (xDirection === 1 && yDirection === -1) {
        xDirection = -1;
        return;
    }
    if (xDirection === -1 && yDirection === -1) {
        yDirection = 1;
        return;
    }
    if (xDirection === -1 && yDirection === 1) {
        xDirection = 1;
        return;
    }
}
// check for pause
function togglePause() {
    const overlay = document.getElementById('pauseOverlay');
    if (gameOver === false && stageCleared === false) {
        overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
        if (overlay.style.display === 'flex') {
            clearInterval(timerId);
            document.removeEventListener("keydown", moveUser);
            grid.removeEventListener("mousemove", moveUserWithMouse);

        } else {
            timerId = setInterval(moveBall, 1);
            document.addEventListener("keydown", moveUser);
            grid.addEventListener("mousemove", moveUserWithMouse);

        }
    }
}
const pauseButton = document.getElementById('pauseButton');
pauseButton.addEventListener('click', togglePause);

//move User with mouse
function moveUserWithMouse(e) {
    if (gameStarted) {
        const gridRect = grid.getBoundingClientRect();
        const mouseX = e.clientX - gridRect.left;
        const newUserX = mouseX - userWidth / 2;

        // Clamp the paddle inside the board
        if (newUserX >= 0 && newUserX <= boardWidth - userWidth) {
            currentPosition[0] = newUserX;
            drawUser();
        }
    }
}
grid.addEventListener("mousemove", moveUserWithMouse);
document.removeEventListener("keydown", moveUser);

// Restart the game
function restartGame() {
    // Reset game state
    window.location.reload()
}
// Add score display
function showLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const leaderboardList = document.getElementById('leaderboardList');
    leaderboardList.innerHTML = "";

    leaderboard.forEach((entry, index) => {
        const item = document.createElement("li");
        // item.textContent = `${index + 1}. ${entry.name} - ${entry.score}`;
        if (index === 0) {
            item.classList.add("top1");
        } else if (index === 1) {
            item.classList.add("top2");
        } else if (index === 2) {
            item.classList.add("top3");
        }
        const nameSpan = document.createElement('span');
        nameSpan.className = 'name';
        nameSpan.textContent = entry.name;
        nameSpan.title = entry.name; // Tooltip on hover

        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'score';
        scoreSpan.textContent = entry.score;

        item.appendChild(nameSpan);
        item.appendChild(scoreSpan);
        leaderboardList.appendChild(item);
    });

    document.getElementById('leaderboardOverlay').style.display = 'flex';
    document.getElementById('gameOverOverlay').style.display = 'none';
}
//Add save score
function saveScore(name) {
    // Get existing leaderboard or start new
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const minLeaderboardSize = 10;
    // Add new score
    if (leaderboard.length < minLeaderboardSize) {
        leaderboard.push({ name: name, score: score,timestamp: Date.now() });
    } else {
        const lowestScore = leaderboard[leaderboard.length - 1].score;
        if (score > lowestScore) {
            leaderboard.pop(); // remove lowest
            leaderboard.push({ name:name, score:score, timestamp: Date.now() });
        } else {
            return; // Don't update if score is too low
        }
    }

    // Sort scores descending
    leaderboard.sort((a, b) => {
        if (b.score === a.score) {
            return a.timestamp - b.timestamp; // Earlier timestamp comes first
        }
        return b.score - a.score;
    });
    // Optionally limit to top 10 scores
    const topScores = leaderboard.slice(0, 10);

    // Save back to localStorage
    localStorage.setItem('leaderboard', JSON.stringify(topScores));

    // Display leaderboard
    showLeaderboard();
}
//Update Stage UI
function updateStageUI() {
    document.getElementById('stage').innerText = currentStage;
}

//play sound fix
// Preload your game sounds
const gameSounds = [blockHitSound1, blockHitSound2];

let gameStarted = false;
let audioUnlocked = false;

// Listen for SPACE to start game
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !gameStarted) {

        if (!audioUnlocked) {
            unlockAudio();
        }

        document.getElementById('startText').style.display = 'none';
        startCountdown();
    }
});

// Unlock audio by playing and pausing each sound
function unlockAudio() {
    audioUnlocked = true;
    gameSounds.forEach(sound => {
        sound.play().then(() => {
            sound.pause();
            sound.currentTime = 0;
        }).catch(() => {
            // Some browsers still block this, but this attempt unlocks most
        });
    });
}

// Countdown before game starts
function startCountdown() {
    const countdownEl = document.getElementById('countdown');
    countdownEl.style.display = 'block';

    let count = 3;
    countdownEl.textContent = count;

    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownEl.textContent = count;
        } else {
            clearInterval(countdownInterval);
            countdownEl.textContent = "Go!";
            setTimeout(() => {
                document.getElementById('overlay').style.display = 'none';
                startGame();
            }, 800);
        }
    }, 1000);
}

// Game logic starts here
function startGame() {
    gameStarted = true;

    // Your game loop, ball launch, etc.
}

// let userHasInteracted = false;
//
// document.addEventListener('mousemove', () => {
//     if (!userHasInteracted) {
//         userHasInteracted = true;
//         // Preload sound
//         paddleHitSound.play().catch(() => {});  // Will probably still fail, but helps "prime" it
//         paddleHitSound.pause();
//     }
// });

// if (scoreDisplay.innerHTML === "You Win!") {
//     clearInterval(timerId);
//     scoreDisplay.innerHTML = "You Win!";
//     document.removeEventListener("keydown", moveUser);
//     document.getElementById('winOverlay').style.display = 'flex';
// }
