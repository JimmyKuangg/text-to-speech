export interface ISpeaker {
  lang: string;
  onboundary: any;
  onend: any;
  onerror: any;
  onmark: any;
  onpause: any;
  onresume: any;
  onstart: any;
  pitch: number;
  rate: number;
  text: string;
  voice: any;
  volume: number;
}

export class Speaker {
  speaker: any;

  constructor(setSpeaking: any) {
    this.speaker = new SpeechSynthesisUtterance();
    this.speaker.onend = () => {
      setSpeaking(false);
    };
  }

  continue() {
    window.speechSynthesis.resume();
  }

  changeLanguage(language: string) {
    this.speaker.lang = language;
  }

  changeMessage(message: string) {
    this.speaker.text = message;
  }

  changePitch(pitch: number) {
    this.speaker.pitch = pitch;
  }

  changeRate(rate: number) {
    this.speaker.rate = rate;
  }

  changeVolume(volume: number) {
    this.speaker.volume = volume;
  }

  fullStop() {
    window.speechSynthesis.cancel();
  }

  stop() {
    window.speechSynthesis.pause();
  }

  speak() {
    window.speechSynthesis.speak(this.speaker);
  }
}
