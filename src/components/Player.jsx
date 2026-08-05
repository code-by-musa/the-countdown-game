import { useRef, useState } from "react";

export default function Player() {

  let playerName = useRef();

  console.log(playerName);

  let [enteredPlayerName, setEnteredPlayerName] = useState(null);

  let handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';          
    // console.log(playerName.current);
    // console.log(playerName.current.value); 
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input 
        type="text" 
        ref={playerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
