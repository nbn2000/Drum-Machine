import React, { useState, useEffect } from 'react';
import './App.css';
import Clap from './audios/Clap.mp3'
import ClosedHH from './audios/Closed-HH.mp3'
import Heater1 from './audios/Heater-1.mp3'
import Heater2 from './audios/Heater-2.mp3'
import Heater3 from './audios/Heater-3.mp3'
import Heater4 from './audios/Heater-4.mp3'
import Kick_n_Hat from './audios/Kick_n_Hat.mp3'
import Kick from './audios/KICK.mp3'
import OpenHH from './audios/Open-HH.mp3'

// I have imported audios because of some issues in audio src atribute actually I have tried to fix around 2 hours..
//.. and given up and decided to use this method

function App() {
  const [value, setValue] = useState('')
  // useEdffect bacouse make sure whole page is rendered before using eventlistener
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      play(e.key.toUpperCase())
    })

  }, [])

  const play = (e) => {
    const audioElement = document.getElementById(e);
    // if rendering element is exist then call play() and set value
    if (audioElement) {
      audioElement.play();
      setValue(e)
    }
  }

  return (
    <div className="App container" id='drum-machine'>
      <div className="flex-column align-items-center justify-content-center">
        <p id='display' className="text-center">{value}</p>
        <div className='row row-1'>
          <div className="col-sm">
            <button className="drum-pad" id="Clap" onClick={() => play('Q')}>
              <audio className="clip" id="Q" src={Clap} />Q</button>
          </div>
          <div className="col-sm">
            <button className="drum-pad" id="Closed-HH" onClick={() => play('W')} >
              <audio className="clip" id="W" src={ClosedHH} />W</button>
          </div>
          <div className="col-sm">
            <button className="drum-pad" id="Heater-1" onClick={() => play('E')}>
              <audio className="clip" id="E" src={Heater1} />E</button>
          </div>
          <div className="col-sm">
            <button className="drum-pad" id="Heater-2" onClick={() => play('A')}>
              <audio className="clip" id="A" src={Heater2} />A</button>
          </div>
          <div className="col-sm">
            <button className="drum-pad" id="Heater-3" onClick={() => play('S')}>
              <audio className="clip" id="S" src={Heater3} />S</button>
          </div>
        </div>
        <div className='row row-2'>
          <div className='col-sm'>
            <button className="drum-pad" id="Heater-4" onClick={() => play('D')}>
              <audio className="clip" id="D" src={Heater4} />D</button>
          </div>
          <div className='col-sm'>
            <button className="drum-pad" id="Kick_n_Hat" onClick={() => play('Z')}>
              <audio className="clip" id="Z" src={Kick_n_Hat} />Z</button>
          </div>
          <div className='col-sm'>
            <button className="drum-pad" id="KICK" onClick={() => play('X')}>
              <audio className="clip" id="X" src={Kick} />X</button>
          </div>
          <div className='col-sm'>
            <button className="drum-pad" id="Open-HH" onClick={() => play('C')}>
              <audio className="clip" id="C" src={OpenHH} />C</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;