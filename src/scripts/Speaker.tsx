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
