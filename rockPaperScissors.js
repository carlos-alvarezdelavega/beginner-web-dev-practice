//building the user input. 
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'paper' || userInput === 'rock' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Please choose between rock, paper, or scissors');
    }
  }
  
  
  // building the computer input with a randomised computerInput
  const getComputerChoice = function() {
    const computerInput = Math.floor(Math.random() * 3);
      if (computerInput === 0) {
        return 'paper';
      }
      if (computerInput === 1) {
        return 'rock';
      }
      if (computerInput === 2) {
        return 'scissors';
      }
  }
  // Creating the winner determination
  const determineWinner = function(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'This game is a tie!';
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'bomb') {
      return 'You won!'
    }
    if (computerChoice === 'bomb') {
      return 'The computer won!'
    }
  }
  // Function to play the game
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    console.log(`Ther winner is: ${determineWinner(userChoice, computerChoice)}`);
  }
  
  console.log(playGame());