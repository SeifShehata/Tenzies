import React, { useState, useEffect } from "react";

function Die(props) {
  const [dicePressed, setDicePressed] = useState(false);
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    // Use useEffect to handle side effects after state update
    props.onToggleLock(locked);
  }, [locked, props]);

  function pressDice() {
    setDicePressed((prevState) => !prevState);
    setLocked((prevState) => !prevState);
    console.log("pressed");
  }
  return (
    <div
      onClick={pressDice}
      className={`dice1 dice ${dicePressed ? "green" : ""}`}
    >
        {props.value}
      {/* {locked ? props.value : Math.floor(Math.random() * 6) + 1} */}
    </div>
  );
}

export default Die;
