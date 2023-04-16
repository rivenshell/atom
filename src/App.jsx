import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1 class="title">welcome to the simulation</h1>

        <p class="message"> i'snt this cool samantha </p>
      </div>
    </>
  );
}

export default App;
