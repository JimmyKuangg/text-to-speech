import React, { useState, useEffect } from 'react';
import Input from './components/Input';
// import { ISpeaker } from './scripts/Speaker';

const speak = (speaker) => {
  speaker.text = 'hello world';
  window.speechSynthesis.speak(speaker);
};

function App() {
  const [speaker, setSpeaker] = useState(null);
  useEffect(() => {
    setSpeaker(new SpeechSynthesisUtterance());
  }, []);

  useEffect(() => {
    if (speaker !== null) {
      speak(speaker);
    }
  }, [speaker]);

  if (!speaker) return null;
  return (
    <Input
      placeholder="Input Text Here"
      css={`
        width: 80vw;
      `}
      color="gray"
      value="Sample Text"
    />
  );
}

export default App;
