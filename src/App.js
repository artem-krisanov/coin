import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerSelection, setPlayerSelection] = useState('');
  const [computerSelection, setComputerSelection] = useState('');
  const [counter, setCounter] = useState(0);

  //constants
  const result = 5;
  const image_1 = "https://img2.freepng.ru/20180421/wge/kisspng-gold-coin-american-gold-eagle-numismatic-guaranty-5-dime-coin-5adb3da451d193.5859639515243176043351.jpg";
  const image_2 = "https://491shkola.spb.ru/media/k2/items/cache/e24512631df602ac0b31ecf345e0d5e9_XL.jpg";
  
  //flip coin and increments scores
  useEffect(() => {
    const flipCoinResult = flipCoin();
    const coin = flipCoin();
    setComputerSelection(flipCoinResult);
    
    if (playerSelection === coin) {
      setPlayerScore(playerScore + 1);
    }
    
    if (flipCoinResult === coin) {
      setComputerScore(computerScore + 1);
    }
  }, [playerSelection, counter])

  //check if game ended
  useEffect(() => {
    if(playerScore === result && computerScore === result) {
      alert('Tie');
    } else if (playerScore === result) {
      alert('You win!');
    } else if (computerScore === result) {
      alert('You lose!');
    }
  }, [playerScore, computerScore])
 
  
  const handleClick = (selection) => {
    setPlayerSelection(selection);
    setCounter(counter + 1);
    document.getElementsByClassName('top')[0].classList.toggle("transparent");
  }

  const flipCoin = () => Math.floor(Math.random() * 2) ? 'Heads' : 'Tails';


  return (
    <div className="App">
      <div id='header'>First Player to 5 points win!</div>
      <div id='selected'>
        <div>Player selected:{playerSelection} </div>
        <div>Computer selected:{computerSelection} </div>
      </div>
      <div id='image'>
        <img class="bottom" src={image_1} />
        <img class="top" src={image_2} />
      </div>
      <div id='score'>
        <div>Player: {playerScore}</div>
        <div>Computer: {computerScore}</div>
      </div>
      <div id='text'>Make a selection</div>
      <div id='selections'>
        <div onClick={() => handleClick('Heads')}>Heads</div>
        <div onClick={() => handleClick('Tails')}>Tails</div>
      </div>
    </div>
  );
}

export default App;