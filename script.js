let magicNumber =Math.floor(Math.random()*20 +1);

let score =20;
let highscore = 0;
console.log(magicNumber);

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
  

document.querySelector('.check').addEventListener('click', function () {

 
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === magicNumber) {
     document.querySelector('.message').textContent = '🎉 Correct Number!';
     document.querySelector(".number").textContent =magicNumber;
    // document.querySelector('.number').textContent = magicNumber;

    document.querySelector('body').style.backgroundColor ='#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  if (magicNumber > highscore) {
    highscore = magicNumber;
    document.querySelector('.highscore').textContent = highscore;
  }


    else if (guess !== magicNumber) {
      if (score > 1) {
         document.querySelector('.message').textContent =
         guess > magicNumber ? '📈 Too high!' : '📉 Too low!';
      
        score--;
        document.querySelector('.score').textContent = score;
      } else {
         document.querySelector('.message').textContent = '💥 You lost the game!';
       
        document.querySelector('.score').textContent = 0;
      }
    }
  
  });
  document.querySelector('.again').addEventListener("click", function(){
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    score =20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  });





