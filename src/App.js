import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClick = (path) => {
    fetch(`https://us-central1-zero-ninja.cloudfunctions.net/app/${path || ''}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" style={{ height: "50px", width: "100px" }} onClick={() => handleClick()}>Show me the money!</button>
        <button type="button" style={{ color: "red", height: "50px", width: "100px" }} onClick={() => handleClick('api')}>Show me the money on red!</button>
      </header>
    </div>
  );
}

export default App;
