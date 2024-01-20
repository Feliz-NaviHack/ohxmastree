import React, { useState } from "react";
import Draggable from "react-draggable";
import useSound from "use-sound";
import twinkle from "./sounds/twinkle.mp3";
import woocrowd from "./sounds/woocrowd.mp3";
import tree from "./images/christmas-tree-vector-transparent-bg.png";
import blueImage from "./images/decoration_blue.png";
import greenImage from "./images/decoration_green.png";
import orangeImage from "./images/decoration_orange.png";
import purpleImage from "./images/decoration_purple.png";
import redImage from "./images/decoration_red.png";
import turquoiseImage from "./images/decoration_turquoise.png";
import starImage from "./images/star.png";

import "./App.css";

function App() {

  const getInitialPositions = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const positionsFromURL = queryParams.get('positions');
    if (positionsFromURL) {
      try {
        return JSON.parse(decodeURIComponent(positionsFromURL));
      } catch (error) {
        console.error('Error parsing positions from URL', error);
        return {};
      }
    }
    return {};
  };
  const [positions, setPositions] = useState(getInitialPositions());
  const [positionsString, setPositionsString] = useState("");

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

  const handleStop = (id) => {
    // Play sound when dragging stops
    if (id === "star") {
      playSound(woocrowd);
    } else {
      playSound(twinkle);
    }
  };

  const handleSharePositions = () => {
    const newPositionsString = JSON.stringify(positions);
    setPositionsString(newPositionsString);
    const encodedPositions = encodeURIComponent(newPositionsString);
    window.history.pushState(null, null, `?positions=${encodedPositions}`);
  };
  

  const [playSound, {sound, status}]  = useSound(twinkle, { volume: 1 });
  console.log('playSound:', playSound);
  console.log('sound:', sound);
  console.log('status:', status);
  

  

  return (
    <div className="App">
      <div className="main">
        <h1>Decorate the Christmas Tree!</h1>
        <img src={tree} className="xmastree" alt="Xmas Tree" />
        <div className="decorationsbox">
          <Draggable
            defaultPosition={positions['star'] || {x: 0, y: 0}}
            onStop={() => handleStop("star")}
            onDrag={(e, data) => handleDrag(e, data, "star")}
          >
            <div>
              <img src={starImage} className="decorations" alt="Xmas Decoration" />
            </div>
          </Draggable>
  
          <div className="decorationssubdivider">
            {[1, 2, 3, 4, 5].map((group) => (
              <div className={`decorations${group}`} key={group}>
                {["blue", "orange", "purple", "green", "red", "turquoise"].map(
                  (color) => {
                    const id = `${color}_${group}`;
                    return (
                      <Draggable
                        key={id}
                        defaultPosition={positions[id] || {x: 0, y: 0}}
                        onStop={() => handleStop(id)}
                        onDrag={(e, data) => handleDrag(e, data, id)}
                      >
                        <div>
                          <img src={imageMap[color]} className="decorations" alt="Xmas Decoration" />
                        </div>
                      </Draggable>
                    );
                  }
                )}
              </div>
            ))}
          </div>
  
          {/* Button to share positions */}
          <button onClick={handleSharePositions}>Share Positions</button>
  
          {/* Display positions string in a dedicated p tag */}
          <p className="positionstring">{positionsString}</p>
        </div>
      </div>
    </div>
  );
}

export default App;