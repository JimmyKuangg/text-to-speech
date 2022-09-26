// export interface ISpeaker {
//   lang: string;
//   onboundary: any;
//   onend: any;
//   onerror: any;
//   onmark: any;
//   onpause: any;
//   onresume: any;
//   onstart: any;
//   pitch: number;
//   rate: number;
//   text: string;
//   voice: any;
//   volume: number;
// }

export class Speaker {
  speaker: any;

  constructor() {
    this.speaker = new SpeechSynthesisUtterance();
  }

  changeMessage(message: string) {
    this.speaker.text = message;
  }

  changeVolume(volume: number) {
    this.speaker.volume = volume;
  }

  speak() {
    window.speechSynthesis.speak(this.speaker);
  }
}
