import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import { Speaker } from './scripts/speaker';
import Button from './components/Button';
import Slider from './components/Slider';
import CustomSelect from './components/Select';

const getLanguageOptions = () => {
  const languages = window.speechSynthesis.getVoices();
  const options = [];
  for (let language of languages) {
    options.push({
      value: language.lang,
      label: `${language.name} ${language.lang}`,
    });
  }
  return options;
};

function App() {
  const [speaker, setSpeaker] = useState(null);
  const [text, setText] = useState('');
  const [volume, setVolume] = useState(0.5);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [language, setLanguage] = useState('');
  useEffect(() => {
    setSpeaker(new Speaker());
  }, []);

  useEffect(() => {
    if (speaker) {
      speaker.changeLanguage(language);
    }
  }, [language]);

  const handleOnChange = (e) => {
    setLanguage(e.target.value);
  };

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
          setVolume(e.target.value);
        }}
        max={'1'}
        step={'0.01'}
        text={`Volume: ${Math.trunc(volume * 100)}`}
      />
      <Slider
        onInput={(e) => {
          speaker.changeRate(e.target.value);
          setRate(e.target.value);
        }}
        max={'2'}
        step={'0.1'}
        text={`Rate: ${rate}`}
      />
      <Slider
        onInput={(e) => {
          speaker.changePitch(e.target.value);
          setPitch(e.target.value);
        }}
        max={'2'}
        step={'0.1'}
        text={`Pitch: ${pitch}`}
      />
      <CustomSelect
        onChange={handleOnChange}
        options={getLanguageOptions()}
        label={'Languages: '}
      />
    </>
  );
}

export default App;
