import React, { useState, useEffect, useRef } from 'react';
import Input from './components/Input';
import { Speaker } from './scripts/speaker';
import Button from './components/Button';
import Slider from './components/Slider';
import CustomSelect from './components/Select';
import Label from './components/Label';

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
  // const isMounted = useRef(false);
  const [speaking, setSpeaking] = useState(false);
  const [speaker, setSpeaker] = useState(new Speaker(setSpeaking));
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
      <div id="tts">
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
              if (text.length > 0) {
                if (!speaking) {
                  speaker.speak();
                  setSpeaking(true);
                } else {
                  speaker.fullStop();
                }
              }
            }}
            text={speaking ? 'Stop' : 'Play'}
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
      </div>
      <div id="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </div>
    </>
  );
}

export default App;
