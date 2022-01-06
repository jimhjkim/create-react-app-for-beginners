import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [showing, setShowing] = useState(false);
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onShowingClick = () => setShowing(prev => !prev);
  const onClick = () => setCounter(prev => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");
  useEffect(() => console.log("i run only once"), []);
  useEffect(() => console.log("I run when 'keyword' changes"), [keyword]);
  useEffect(() => console.log("I run when 'counter' changes"), [counter]);
  useEffect(() => console.log("I run when 'keyword' & 'counter' changes"), [keyword, counter]);

  return (
    <div>
      <button onClick={onShowingClick}>{showing ? "Hide" : "Show"}</button>
      <input 
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Click me" onClick={onClick}/>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
