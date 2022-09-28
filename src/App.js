import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import { Speaker } from './scripts/speaker';

function App() {
  const [speaker, setSpeaker] = useState(null);
  useEffect(() => {
    setSpeaker(new Speaker());
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
