import React from 'react';
import Draggable from 'react-draggable';


import tree from './images/christmas-tree-vector-transparent-bg.png';
import blue from './images/decoration_blue.png';
import green from './images/decoration_green.png';
import orange from './images/decoration_orange.png';
import purple from './images/decoration_purple.png';
import red from './images/decoration_red.png';
import turquoise from './images/decoration_turquoise.png';

import './App.css';

function App() {
  return (
    
    <div className="App">
      <div className="main">
      <img src={tree} className="xmastree" alt="Xmas Tree"/>
      <div className="decorationsbox">
      <p>this is the decorations box</p>
        <Draggable className="bluedrag">
          <div><img src={blue} className="decorations" alt="Xmas Decoration"/></div>
        </Draggable>
        <Draggable className="orangedrag">
          <div><img src={orange} className="decorations" alt="Xmas Decoration"/></div>
        </Draggable>
        <Draggable className="purpledrag">
          <div><img src={purple} className="decorations" alt="Xmas Decoration"/></div>
        </Draggable>
        <Draggable className="greendrag">
          <div><img src={green} className="decorations" alt="Xmas Decoration"/></div>
        </Draggable>
        <Draggable className="reddrag">
          <div><img src={red} className="decorations" alt="Xmas Decoration"/></div>
        </Draggable>
        <Draggable className="turquoisedrag">
          <div><img src={turquoise} className="decorations" alt="Xmas Decoration"/></div>
        </Draggable>
    </div>
    </div>
    </div>
  

  );
}

export default App;
