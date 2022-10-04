import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import { Speaker } from './scripts/speaker';
import Button from './components/Button';
import Slider from './components/Slider';

function App() {
  const [speaker, setSpeaker] = useState(null);
  const [text, setText] = useState('');
  const [volume, setVolume] = useState(50);
  const [rate, setRate] = useState(1);
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
          speaker.changeVolume(e.target.value / 100);
          setVolume(e.target.value);
        }}
      />
      <p>{volume}</p>
      <Slider
        onInput={(e) => {
          speaker.changeRate((e.target.value / 100) * 2);
          setRate(e.target.value);
        }}
      />
      <p>{rate / 50}</p>
    </>
  );
}

export default App;
