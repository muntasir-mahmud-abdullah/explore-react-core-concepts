import { useState } from "react";

export default function Player() {
  const [player, setPlayer] = useState(11);
  const divStyle = {
    backgroundColor: "gray",
    border: "2px solid black",
    margin: "20px",
    borderRadius: "7px",
  };

  const handleAdd = () => {
    const newPlayer = player + 1;
    setPlayer(newPlayer);
  };
  const handleRemove = () => {
    setPlayer(player - 1);
  };
  return (
    <div style={divStyle}>
      <h2> Players : {player} </h2>
      <button onClick={handleAdd}>Add Player</button>
      <button onClick={handleRemove}> Remove Player </button>
    </div>
  );
}
