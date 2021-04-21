import logo from './logo.svg';
import './App.css';
import chatbot from './chatbot.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="logo">
            <img src="https://i.postimg.cc/mg4rWBmv/logo.png" alt="logo" />
          </div>
          <ul className="nav-area">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="welcome-text">
          <h1><span>Nature</span> is the art of god</h1>
          <a href="#">Contact US</a>
        </div>
      </header>
      <chatbot />
    </div>
  );
}

export default App;
