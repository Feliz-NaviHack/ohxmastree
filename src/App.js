import logo from './images/christmas-tree-vector-transparent-bg.png';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="xmastree" alt="Xmas Tree" />
        <p>
          Decorate the Xmas Tree!
        </p>
      
      </header>
    </div>
  );
}

export default App;
