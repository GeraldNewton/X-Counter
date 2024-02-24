import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let handleClick = (bool) => {
    if (bool) setCount((prevState) => prevState + 1);
    else setCount((prevState) => prevState - 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => handleClick(true)}>Increment</button>
      <button onClick={() => handleClick(false)}>Decrement</button>
    </div>
  );
}

export default App;
