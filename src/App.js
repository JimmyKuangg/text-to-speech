import React, { useState, useEffect } from 'react';
import Input from './components/Input';
// import { ISpeaker } from './scripts/Speaker';

const speak = (speaker) => {
  speaker.text = 'Lorem Ipsum';
  window.speechSynthesis.speak(speaker);
};

function App() {
  const [speaker, setSpeaker] = useState(null);
  useEffect(() => {
    setSpeaker(new SpeechSynthesisUtterance());
  }, []);

  if (!speaker) return null;
  return (
    <Input
      placeholder="Input Text Here"
      css={`
        height: 30px;
        width: 80vw;
      `}
      color="white"
    />
  );
}

export default App;
