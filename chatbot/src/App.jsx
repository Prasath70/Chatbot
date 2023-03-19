import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Chatbot from "./chatbox";
function App() {
  const [count, setCount] = useState(0);

  return (
  <div className="header-parent">
      <div className="header">
        <h1>Chat Bot </h1>
      </div>
      <Chatbot />
    </div>
  );
}

export default App;
