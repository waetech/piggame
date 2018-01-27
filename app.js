/*
GAME RULES

1. The game has 2 players, playing in rounds
2. In each turn, a player rolls a dice as many times as he wishes.  Each result gets added to his score.
3. But, if the player rolls a 1, all his ROUND score gets lost.  After that it's the next player's turn.
4. The player can choose to 'HOLD', which means that his round score gets added to the global score.  After that it's the next player's turn.
5. The first player to reach 100 points on GLOBAL score wins the game.


*/

var scores, roundScores, activePlayer, dice;
//Next player
        nextPlayer();

init();



dice = Math.floor(Math.random() * 6)+1;
dice = Math.floor(Math.random() * 6 )+1;
//console.log(dice);



function btn(){
    //Do something here
}

btn();

document.querySelector('.btn-roll').addEventListener('click',function(){//Gets executed only in here and CANNOT BE REUSED OUTSIDE - called Anonymous function
    
        //Random number
    dice = Math.floor(Math.random()*6) +1;
    
    
    //Display the result
   var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    
    //Update the round score IF the rolled number was not a 1
    if(dice !== 1){
        //Add score
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
    }else {
        //Next player
        nextPlayer();
    }    
    
});



document.querySelector('.btn-hold').addEventListener('click', function(){
            //Add current score to global score
    scores[activePlayer] += roundScores;
    
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    var input = document.querySelector('final-score').value;
    var winningScore;
    
    if(input){
        winningScore = input;
        
    }else{
        winningScore = 100;
    }
    
    //Check if player won the game
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent = 'You win!';
        document.querySelector('.dice-1').style.display = 'block';
        document.querySelector('.dice-2').style.display = 'block';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
    
    } else{
       //Next Player
    nextPlayer(); 
    }
    
   
    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScores = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //Remove dice display
        document.querySelector('.dice').style.display = 'none';
    }

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScores = 0;
    
document.querySelector('.dice-1').style.display= 'block';
document.querySelector('.dice-2').style.display = 'block';    

document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2'; 
document.querySelector('.player-0-panel').classList.remove('winner');    
document.querySelector('.player-1-panel').classList.remove('winner'); 
document.querySelector('.player-0-panel').classList.remove('active');    
document.querySelector('.player-1-panel').classList.remove('active');   
document.querySelector('.player-0-panel').classList.add('active');    
    
}

//var x = document.querySelector('#score-0').textContent;
//console.log(x);






