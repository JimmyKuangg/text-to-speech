import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import { Speaker } from './scripts/speaker';
import Button from './components/Button';
import Slider from './components/Slider';

function App() {
  const [speaker, setSpeaker] = useState(null);
  const [text, setText] = useState('');
  const [volume, setVolume] = useState(0.5);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  useEffect(() => {
    setSpeaker(new Speaker());
  }, []);

  if (!speaker) return null;
  return (
    <>
      <Input
        onChange={(e) => {
          speaker.changeMessage(e.target.value);
          setText(e.target.value);
        }}
        placeholder="Input Text Here"
        value={text}
        css={`
          height: 30px;
          width: 80vw;
        `}
      />
      <Button
        onClick={() => {
          speaker.speak();
        }}
        text="Play Voice"
        css={`
          color: blue;
        `}
      />
      <Slider
        onInput={(e) => {
          speaker.changeVolume(e.target.value);
          setVolume(e.target.value / 100);
        }}
        text={`Volume: ${Math.trunc(volume * 100)}`}
      />
      <Slider
        onInput={(e) => {
          speaker.changeRate((e.target.value / 100) * 2);
          setRate(e.target.value);
        }}
        text={`Rate: ${rate}`}
      />
      <Slider
        onInput={(e) => {
          speaker.changePitch((e.target.value / 100) * 2);
          setPitch(e.target.value);
        }}
        max={'2'}
        step={'0.1'}
        text={`Pitch: ${pitch}`}
      />
    </>
  );
}

export default App;
