import logo from './images/christmas-tree-vector-transparent-bg.png';
import blue from './images/decoration_blue.png';
import green from './images/decoration_green.png';
import orange from './images/decoration_orange.png';
import purple from './images/decoration_purple.png';
import red from './images/decoration_red.png';
import turquoise from './images/decoration_turquoise.png';

import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="xmastree" alt="Xmas Tree" />
        <p>
          Decorate the Xmas Tree!
        </p>
        <div id="decorationsbox">
        <img src={blue} id = "blue" className="decorations" alt = "Xmas Decoration" />
        <img src={green} id = "green" className="decorations" alt = "Xmas Decoration" />
        <img src={orange} id = "orange" className="decorations" alt = "Xmas Decoration" />
        <img src={purple} id = "purple" className="decorations" alt = "Xmas Decoration" />
        <img src={red} id = "red" className="decorations" alt = "Xmas Decoration" />
        <img src={turquoise} id = "turquoise" className="decorations" alt = "Xmas Decoration" />
        </div>
      </header>
    </div>
  );
}

export default App;
