import "./App.css";
import Counter from "./Counter";
import Player from "./Player";
import User from "./User";
import Friends from "./Friends";
import Friend from "./Friend";
function App() {
  function handleclick() {
    alert("Button1 clicked");
  }
  const handleclick2 = () => {
    alert("button2 clicked");
  };
  const addFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>React Core Concept 2</h1>
      <Friends></Friends>
      <User></User>
      <Player>  </Player>
      <Counter></Counter>
      <button onClick={handleclick}> Click Me </button>
      <button onClick={handleclick2}> Click Me 2 </button>
      <button onClick={() => alert("button3 clicked")}> Click Me 3 </button>
      <button onClick={() => addFive(3)}> Click Me 4 </button>
    </>
  );
}

export default App;
