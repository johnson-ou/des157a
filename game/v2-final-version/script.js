(function() {
    'use strict';
    console.log('reading js');
  
    let player1Score = 0;
    let player2Score = 0;
    let currentPlayer = 1;
    const winningScore = 21;
  
    const player1ScoreEl = document.querySelector("#player1-score");
    const player2ScoreEl = document.querySelector("#player2-score");
    const messageEl = document.querySelector("#message");
    const shootBtn = document.querySelector("#shoot-btn");
    const passBtn = document.querySelector("#pass-btn");
  
    const swishSound = new Audio("audio/basketballMake.mp3");
    const missSound = new Audio("audio/basketballBackboard.mp3");
    const passSound = new Audio("pass.mp3");
  
    function updateScoreboard() {
      player1ScoreEl.textContent = player1Score;
      player2ScoreEl.textContent = player2Score;
    }
  
    // Switch possession to the other player
    function switchPossession() {
      currentPlayer = currentPlayer === 1 ? 2 : 1;
      messageEl.textContent = `Player ${currentPlayer}'s turn!`;
    }
  
    // Check if a player has reached the winning score
    function checkWin() {
      if (player1Score >= winningScore) {
        messageEl.textContent = "Player 1 wins! Game Over.";
        endGame();
      } else if (player2Score >= winningScore) {
        messageEl.textContent = "Player 2 wins! Game Over.";
        endGame();
      }
    }

  
  
    // Disable game controls when game is over
    function endGame() {
      shootBtn.disabled = true;
      passBtn.disabled = true;
    }
  
    // Event handler for the "Shoot" button
    shootBtn.addEventListener("click", function() {
      shootBtn.disabled = true;
      passBtn.disabled = true;
      // Outcomes: 0, 2, or 3 points (made so more probability of scoring and 30% chance of miss)
      const outcomes = [0, 0, 0, 2, 2, 2, 2, 3, 3, 3];
      const roll = outcomes[Math.floor(Math.random() * outcomes.length)];
      if (roll === 0) {
        // Shot missed – no points added
        messageEl.textContent = `Player ${currentPlayer} missed the shot!`;
        missSound.play();
      } else {
        // Successful shot – add points and play swish sound
        if (currentPlayer === 1) {
          player1Score += roll;
        } else {
          player2Score += roll;
        }
        messageEl.textContent = `Player ${currentPlayer} made a ${roll}-point shot!`;
        swishSound.play();
        updateScoreboard();
      }
      // setTimeout(hideGameStatusMessage, 1300 Milliseconds);
      setTimeout(() => {

        shootBtn.disabled = false;
        passBtn.disabled = false;
        switchPossession();
        checkWin();

      }, 1300)
      
    });
  
    // Event handler for the "Pass" button
    passBtn.addEventListener("click", function() {
      passSound.play();
      shootBtn.disabled = true;
      passBtn.disabled = true;
      messageEl.textContent = `Player ${currentPlayer} passes the ball.`;
      setTimeout(() => {
        shootBtn.disabled = false;
        passBtn.disabled = false;
        switchPossession();
      }, 1300)
    });
  })();
  