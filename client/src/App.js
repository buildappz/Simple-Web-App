import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const callAPI = () => {
  axios.get("http://localhost:9000/testAPI").then((data) => {
    //this console.log will be in our frontend console
  console.log(data)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={callAPI}>Make API Call</button>
      </header>
    </div>
  );
}

export default App;
