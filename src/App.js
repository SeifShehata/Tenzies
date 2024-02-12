import React from "react";
import Die from './components/Die';
import styles from "./style.css"

function App() {
  const [numbers, setNumbers] = React.useState(Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1));


  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
}
  function rollDice() {
    const newNumbers = numbers.map(() => Math.floor(Math.random() * 6) + 1);
    setNumbers(newNumbers);
  }
  function handleLock(locked){
    console.log(`the dice is ${locked}` )
    
  }

  return (
    <main className='app--main'>
      <div className="app--div">
        <h1 className="main-title">Tenzies</h1>
        <h3>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
        <div className="die-div">
          {numbers.map((number, index) => (
            <Die key={index} value={number} onToggleLock={handleLock} />
          ))}
      <button className="roll-button" onClick={rollDice}>Roll!</button>

        </div>
      </div>
    </main>
  );
}

export default App;
