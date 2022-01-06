import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter(prev => prev + 1);
  console.log("i run all the time");
  const iRunOnlyOnce = () => console.log("i run only once");
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Click me" onClick={onClick}/>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
