import React, { useState, useEffect, useRef } from 'react';
import Input from './components/Input';
import { Speaker } from './scripts/speaker';
import Button from './components/Button';
import Slider from './components/Slider';
import CustomSelect from './components/Select';
import Label from './components/Label';
import styles from './styles/test.css';

const setSpeech = () => {
  return new Promise(function (resolve, reject) {
    let synth = window.speechSynthesis;
    let id;

    id = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        resolve(synth.getVoices());
        clearInterval(id);
      }
    }, 10);
  });
};

function App() {
  const isMounted = useRef(false);
  const [speaker, setSpeaker] = useState(new Speaker());
  const [text, setText] = useState('');
  const [volume, setVolume] = useState(0.5);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [language, setLanguage] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const speech = setSpeech();
    speech.then((options) => {
      const formatted = [];
      for (let option of options) {
        formatted.push({
          value: option.lang,
          label: `${option.name} ${option.lang}`,
        });
      }
      setOptions(formatted);
    });
    speaker.changeVolume(0.5);
  }, []);

  useEffect(() => {
    if (speaker) {
      speaker.changeLanguage(language);
    }
  }, [language]);

  const handleOnChange = (e) => {
    setLanguage(e.target.value);
  };

  if (!speaker || options.length === 0) return null;
  return (
    <>
      <div id="text">
        <Input
          onChange={(e) => {
            speaker.changeMessage(e.target.value);
            setText(e.target.value);
          }}
          placeholder="Input Text Here"
          value={text}
        />
        <Button
          onClick={() => {
            speaker.speak();
          }}
          text="Play"
        />
        <Button
          onClick={() => {
            speaker.fullStop();
          }}
          text="Stop"
        />
      </div>
      <div id="sliders">
        <Slider
          onInput={(e) => {
            speaker.changeVolume(e.target.value);
            setVolume(e.target.value);
          }}
          max={'1'}
          step={'0.01'}
          defaultValue={'0.5'}
        />
        <Label text={'Volume'} value={Math.trunc(volume * 100)}></Label>
        <Slider
          onInput={(e) => {
            speaker.changeRate(e.target.value);
            setRate(e.target.value);
          }}
          max={'2'}
          step={'0.1'}
          defaultValue={'1'}
        />
        <Label text={'Rate'} value={rate}></Label>
        <Slider
          onInput={(e) => {
            speaker.changePitch(e.target.value);
            setPitch(e.target.value);
          }}
          max={'2'}
          step={'0.1'}
          defaultValue={'1'}
        />
        <Label text={'Pitch'} value={pitch}></Label>
      </div>
      <CustomSelect
        onChange={handleOnChange}
        options={options}
        label={'Languages: '}
      />
      <div id="lorem"></div>
    </>
  );
}

export default App;
