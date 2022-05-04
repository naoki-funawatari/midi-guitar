// https://www.aihara.co.jp/~taiji/browser-security/js/equal_temperament.html
// https://inalesson.com/frequency_list/2417/
export interface ITone {
  id: number;
  key: string;
  ja: string;
  en: string;
  frequency: number;
}

export default [
  { id: 1, key: "A0", ja: "ラ0", en: "A0", frequency: 27.5 },
  { id: 2, key: "A#0", ja: "ラ#0", en: "A#0", frequency: 29.135 },
  { id: 3, key: "B0", ja: "シ0", en: "B0", frequency: 30.868 },
  { id: 4, key: "C1", ja: "ド1", en: "C1", frequency: 32.703 },
  { id: 5, key: "C#1", ja: "ド#1", en: "C#1", frequency: 34.648 },
  { id: 6, key: "D1", ja: "レ1", en: "D1", frequency: 36.708 },
  { id: 7, key: "D#1", ja: "レ#1", en: "D#1", frequency: 38.891 },
  { id: 8, key: "E1", ja: "ミ1", en: "E1", frequency: 41.203 },
  { id: 9, key: "F1", ja: "ファ1", en: "F1", frequency: 43.654 },
  { id: 10, key: "F#1", ja: "ファ#1", en: "F#1", frequency: 46.249 },
  { id: 11, key: "G1", ja: "ソ1", en: "G1", frequency: 48.999 },
  { id: 12, key: "G#1", ja: "ソ#1", en: "G#1", frequency: 51.913 },
  { id: 13, key: "A1", ja: "ラ1", en: "A1", frequency: 55 },
  { id: 14, key: "A#1", ja: "ラ#1", en: "A#1", frequency: 58.27 },
  { id: 15, key: "B1", ja: "シ1", en: "B1", frequency: 61.735 },
  { id: 16, key: "C2", ja: "ド2", en: "C2", frequency: 65.406 },
  { id: 17, key: "C#2", ja: "ド#2", en: "C#2", frequency: 69.296 },
  { id: 18, key: "D2", ja: "レ2", en: "D2", frequency: 73.416 },
  { id: 19, key: "D#2", ja: "レ#2", en: "D#2", frequency: 77.782 },
  { id: 20, key: "E2", ja: "ミ2", en: "E2", frequency: 82.407 },
  { id: 21, key: "F2", ja: "ファ2", en: "F2", frequency: 87.307 },
  { id: 22, key: "F#2", ja: "ファ#2", en: "F#2", frequency: 92.499 },
  { id: 23, key: "G2", ja: "ソ2", en: "G2", frequency: 97.999 },
  { id: 24, key: "G#2", ja: "ソ#2", en: "G#2", frequency: 103.826 },
  { id: 25, key: "A2", ja: "ラ2", en: "A2", frequency: 110 },
  { id: 26, key: "A#2", ja: "ラ#2", en: "A#2", frequency: 116.541 },
  { id: 27, key: "B2", ja: "シ2", en: "B2", frequency: 123.471 },
  { id: 28, key: "C3", ja: "ド3", en: "C3", frequency: 130.813 },
  { id: 29, key: "C#3", ja: "ド#3", en: "C#3", frequency: 138.591 },
  { id: 30, key: "D3", ja: "レ3", en: "D3", frequency: 146.832 },
  { id: 31, key: "D#3", ja: "レ#3", en: "D#3", frequency: 155.563 },
  { id: 32, key: "E3", ja: "ミ3", en: "E3", frequency: 164.814 },
  { id: 33, key: "F3", ja: "ファ3", en: "F3", frequency: 174.614 },
  { id: 34, key: "F#3", ja: "ファ#3", en: "F#3", frequency: 184.997 },
  { id: 35, key: "G3", ja: "ソ3", en: "G3", frequency: 195.998 },
  { id: 36, key: "G#3", ja: "ソ#3", en: "G#3", frequency: 207.652 },
  { id: 37, key: "A3", ja: "ラ3", en: "A3", frequency: 220 },
  { id: 38, key: "A#3", ja: "ラ#3", en: "A#3", frequency: 233.082 },
  { id: 39, key: "B3", ja: "シ3", en: "B3", frequency: 246.942 },
  { id: 40, key: "C4", ja: "ド4", en: "C4", frequency: 261.626 },
  { id: 41, key: "C#4", ja: "ド#4", en: "C#4", frequency: 277.183 },
  { id: 42, key: "D4", ja: "レ4", en: "D4", frequency: 293.665 },
  { id: 43, key: "D#4", ja: "レ#4", en: "D#4", frequency: 311.127 },
  { id: 44, key: "E4", ja: "ミ4", en: "E4", frequency: 329.628 },
  { id: 45, key: "F4", ja: "ファ4", en: "F4", frequency: 349.228 },
  { id: 46, key: "F#4", ja: "ファ#4", en: "F#4", frequency: 369.994 },
  { id: 47, key: "G4", ja: "ソ4", en: "G4", frequency: 391.995 },
  { id: 48, key: "G#4", ja: "ソ#4", en: "G#4", frequency: 415.305 },
  { id: 49, key: "A4", ja: "ラ4", en: "A4", frequency: 440 },
  { id: 50, key: "A#4", ja: "ラ#4", en: "A#4", frequency: 466.164 },
  { id: 51, key: "B4", ja: "シ4", en: "B4", frequency: 493.883 },
  { id: 52, key: "C5", ja: "ド5", en: "C5", frequency: 523.251 },
  { id: 53, key: "C#5", ja: "ド#5", en: "C#5", frequency: 554.365 },
  { id: 54, key: "D5", ja: "レ5", en: "D5", frequency: 587.33 },
  { id: 55, key: "D#5", ja: "レ#5", en: "D#5", frequency: 622.254 },
  { id: 56, key: "E5", ja: "ミ5", en: "E5", frequency: 659.255 },
  { id: 57, key: "F5", ja: "ファ5", en: "F5", frequency: 698.456 },
  { id: 58, key: "F#5", ja: "ファ#5", en: "F#5", frequency: 739.989 },
  { id: 59, key: "G5", ja: "ソ5", en: "G5", frequency: 783.991 },
  { id: 60, key: "G#5", ja: "ソ#5", en: "G#5", frequency: 830.609 },
  { id: 61, key: "A5", ja: "ラ5", en: "A5", frequency: 880 },
  { id: 62, key: "A#5", ja: "ラ#5", en: "A#5", frequency: 932.328 },
  { id: 63, key: "B5", ja: "シ5", en: "B5", frequency: 987.767 },
  { id: 64, key: "C6", ja: "ド6", en: "C6", frequency: 1046.502 },
  { id: 65, key: "C#6", ja: "ド#6", en: "C#6", frequency: 1108.731 },
  { id: 66, key: "D6", ja: "レ6", en: "D6", frequency: 1174.659 },
  { id: 67, key: "D#6", ja: "レ#6", en: "D#6", frequency: 1244.508 },
  { id: 68, key: "E6", ja: "ミ6", en: "E6", frequency: 1318.51 },
  { id: 69, key: "F6", ja: "ファ6", en: "F6", frequency: 1396.913 },
  { id: 70, key: "F#6", ja: "ファ#6", en: "F#6", frequency: 1479.978 },
  { id: 71, key: "G6", ja: "ソ6", en: "G6", frequency: 1567.982 },
  { id: 72, key: "G#6", ja: "ソ#6", en: "G#6", frequency: 1661.219 },
  { id: 73, key: "A6", ja: "ラ6", en: "A6", frequency: 1760 },
  { id: 74, key: "A#6", ja: "ラ#6", en: "A#6", frequency: 1864.655 },
  { id: 75, key: "B6", ja: "シ6", en: "B6", frequency: 1975.533 },
  { id: 76, key: "C7", ja: "ド7", en: "C7", frequency: 2093.005 },
  { id: 77, key: "C#7", ja: "ド#7", en: "C#7", frequency: 2217.461 },
  { id: 78, key: "D7", ja: "レ7", en: "D7", frequency: 2349.318 },
  { id: 79, key: "D#7", ja: "レ#7", en: "D#7", frequency: 2489.016 },
  { id: 80, key: "E7", ja: "ミ7", en: "E7", frequency: 2637.02 },
  { id: 81, key: "F7", ja: "ファ7", en: "F7", frequency: 2793.826 },
  { id: 82, key: "F#7", ja: "ファ#7", en: "F#7", frequency: 2959.955 },
  { id: 83, key: "G7", ja: "ソ7", en: "G7", frequency: 3135.963 },
  { id: 84, key: "G#7", ja: "ソ#7", en: "G#7", frequency: 3322.438 },
  { id: 85, key: "A7", ja: "ラ7", en: "A7", frequency: 3520 },
  { id: 86, key: "A#7", ja: "ラ#7", en: "A#7", frequency: 3729.31 },
  { id: 87, key: "B7", ja: "シ7", en: "B7", frequency: 3951.066 },
  { id: 88, key: "C8", ja: "ド8", en: "C8", frequency: 4186.009 },
] as ITone[];