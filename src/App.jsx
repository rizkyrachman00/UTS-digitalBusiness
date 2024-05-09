import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="#" target="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Muhammad Rizky Rachman</h1>
      <h1>21.11.3975</h1>
      <h1>Universitas Amikom Yogyakarta</h1>
    </>
  );
}

export default App;
