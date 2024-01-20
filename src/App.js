import React, { useState } from 'react';
import Draggable from 'react-draggable';
import tree from './images/christmas-tree-vector-transparent-bg.png';
import blueImage from './images/decoration_blue.png';
import greenImage from './images/decoration_green.png';
import orangeImage from './images/decoration_orange.png';
import purpleImage from './images/decoration_purple.png';
import redImage from './images/decoration_red.png';
import turquoiseImage from './images/decoration_turquoise.png';
import starImage from './images/star.png';

import './App.css';

function App() {
  const [positions, setPositions] = useState({});
  const [positionsString, setPositionsString] = useState('');

  // Object mapping color names to image sources
  const imageMap = {
    blue: blueImage,
    green: greenImage,
    orange: orangeImage,
    purple: purpleImage,
    red: redImage,
    turquoise: turquoiseImage,
    star: starImage,
  };

  const handleDrag = (event, data, id) => {
    setPositions((prevPositions) => ({
      ...prevPositions,
      [id]: { x: data.x, y: data.y },
    }));
  };

  const handleSharePositions = () => {
    // Convert positions object to a string (you can adjust the format as needed)
    const newPositionsString = JSON.stringify(positions);
    setPositionsString(newPositionsString);
  };

  return (
    <div className="App">
      <div className="main">
        <h1>Decorate the Christmas Tree!</h1>
        <img src={tree} className="xmastree" alt="Xmas Tree" />
        <div className="decorationsbox">
          <Draggable onDrag={(e, data) => handleDrag(e, data, 'star')}>
            <div>
              <img src={starImage} className="decorations" alt="Xmas Decoration" />
            </div>
          </Draggable>

          <div className="decorationssubdivider">
            {[1, 2, 3, 4, 5].map((group) => (
              <div className={`decorations${group}`} key={group}>
                {['blue', 'orange', 'purple', 'green', 'red', 'turquoise'].map((color) => (
                  <Draggable
                    key={`${color}_${group}`}
                    onDrag={(e, data) => handleDrag(e, data, `${color}_${group}`)}
                  >
                    <div>
                      <img src={imageMap[color]} className="decorations" alt="Xmas Decoration" />
                    </div>
                  </Draggable>
                ))}
              </div>
            ))}
          </div>

          {/* Button to share positions */}
          <button onClick={handleSharePositions}>Share Positions</button>

          {/* Display positions string in a dedicated p tag */}
          <p>{positionsString}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

