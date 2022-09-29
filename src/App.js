import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import { Speaker } from './scripts/speaker';
import Button from './components/Button';

function App() {
  const [speaker, setSpeaker] = useState(null);
  const [text, setText] = useState('');
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
    </>
  );
}

export default App;
