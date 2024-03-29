// https://www.aihara.co.jp/~taiji/browser-security/js/equal_temperament.html
// https://inalesson.com/frequency_list/2417/
export type Scale = {
  [index: string]: {
    id: number;
    frequency: number;
    ja: string;
    en: string;
  };
};

export default {
  A0: { id: 1, frequency: 27.5, ja: "ラ0", en: "A0" },
  "A#0": { id: 2, frequency: 29.135, ja: "ラ#0", en: "A#0" },
  B0: { id: 3, frequency: 30.868, ja: "シ0", en: "B0" },
  C1: { id: 4, frequency: 32.703, ja: "ド1", en: "C1" },
  "C#1": { id: 5, frequency: 34.648, ja: "ド#1", en: "C#1" },
  D1: { id: 6, frequency: 36.708, ja: "レ1", en: "D1" },
  "D#1": { id: 7, frequency: 38.891, ja: "レ#1", en: "D#1" },
  E1: { id: 8, frequency: 41.203, ja: "ミ1", en: "E1" },
  F1: { id: 9, frequency: 43.654, ja: "ファ1", en: "F1" },
  "F#1": { id: 10, frequency: 46.249, ja: "ファ#1", en: "F#1" },
  G1: { id: 11, frequency: 48.999, ja: "ソ1", en: "G1" },
  "G#1": { id: 12, frequency: 51.913, ja: "ソ#1", en: "G#1" },
  A1: { id: 13, frequency: 55, ja: "ラ1", en: "A1" },
  "A#1": { id: 14, frequency: 58.27, ja: "ラ#1", en: "A#1" },
  B1: { id: 15, frequency: 61.735, ja: "シ1", en: "B1" },
  C2: { id: 16, frequency: 65.406, ja: "ド2", en: "C2" },
  "C#2": { id: 17, frequency: 69.296, ja: "ド#2", en: "C#2" },
  D2: { id: 18, frequency: 73.416, ja: "レ2", en: "D2" },
  "D#2": { id: 19, frequency: 77.782, ja: "レ#2", en: "D#2" },
  E2: { id: 20, frequency: 82.407, ja: "ミ2", en: "E2" },
  F2: { id: 21, frequency: 87.307, ja: "ファ2", en: "F2" },
  "F#2": { id: 22, frequency: 92.499, ja: "ファ#2", en: "F#2" },
  G2: { id: 23, frequency: 97.999, ja: "ソ2", en: "G2" },
  "G#2": { id: 24, frequency: 103.826, ja: "ソ#2", en: "G#2" },
  A2: { id: 25, frequency: 110, ja: "ラ2", en: "A2" },
  "A#2": { id: 26, frequency: 116.541, ja: "ラ#2", en: "A#2" },
  B2: { id: 27, frequency: 123.471, ja: "シ2", en: "B2" },
  C3: { id: 28, frequency: 130.813, ja: "ド3", en: "C3" },
  "C#3": { id: 29, frequency: 138.591, ja: "ド#3", en: "C#3" },
  D3: { id: 30, frequency: 146.832, ja: "レ3", en: "D3" },
  "D#3": { id: 31, frequency: 155.563, ja: "レ#3", en: "D#3" },
  E3: { id: 32, frequency: 164.814, ja: "ミ3", en: "E3" },
  F3: { id: 33, frequency: 174.614, ja: "ファ3", en: "F3" },
  "F#3": { id: 34, frequency: 184.997, ja: "ファ#3", en: "F#3" },
  G3: { id: 35, frequency: 195.998, ja: "ソ3", en: "G3" },
  "G#3": { id: 36, frequency: 207.652, ja: "ソ#3", en: "G#3" },
  A3: { id: 37, frequency: 220, ja: "ラ3", en: "A3" },
  "A#3": { id: 38, frequency: 233.082, ja: "ラ#3", en: "A#3" },
  B3: { id: 39, frequency: 246.942, ja: "シ3", en: "B3" },
  C4: { id: 40, frequency: 261.626, ja: "ド4", en: "C4" },
  "C#4": { id: 41, frequency: 277.183, ja: "ド#4", en: "C#4" },
  D4: { id: 42, frequency: 293.665, ja: "レ4", en: "D4" },
  "D#4": { id: 43, frequency: 311.127, ja: "レ#4", en: "D#4" },
  E4: { id: 44, frequency: 329.628, ja: "ミ4", en: "E4" },
  F4: { id: 45, frequency: 349.228, ja: "ファ4", en: "F4" },
  "F#4": { id: 46, frequency: 369.994, ja: "ファ#4", en: "F#4" },
  G4: { id: 47, frequency: 391.995, ja: "ソ4", en: "G4" },
  "G#4": { id: 48, frequency: 415.305, ja: "ソ#4", en: "G#4" },
  A4: { id: 49, frequency: 440, ja: "ラ4", en: "A4" },
  "A#4": { id: 50, frequency: 466.164, ja: "ラ#4", en: "A#4" },
  B4: { id: 51, frequency: 493.883, ja: "シ4", en: "B4" },
  C5: { id: 52, frequency: 523.251, ja: "ド5", en: "C5" },
  "C#5": { id: 53, frequency: 554.365, ja: "ド#5", en: "C#5" },
  D5: { id: 54, frequency: 587.33, ja: "レ5", en: "D5" },
  "D#5": { id: 55, frequency: 622.254, ja: "レ#5", en: "D#5" },
  E5: { id: 56, frequency: 659.255, ja: "ミ5", en: "E5" },
  F5: { id: 57, frequency: 698.456, ja: "ファ5", en: "F5" },
  "F#5": { id: 58, frequency: 739.989, ja: "ファ#5", en: "F#5" },
  G5: { id: 59, frequency: 783.991, ja: "ソ5", en: "G5" },
  "G#5": { id: 60, frequency: 830.609, ja: "ソ#5", en: "G#5" },
  A5: { id: 61, frequency: 880, ja: "ラ5", en: "A5" },
  "A#5": { id: 62, frequency: 932.328, ja: "ラ#5", en: "A#5" },
  B5: { id: 63, frequency: 987.767, ja: "シ5", en: "B5" },
  C6: { id: 64, frequency: 1046.502, ja: "ド6", en: "C6" },
  "C#6": { id: 65, frequency: 1108.731, ja: "ド#6", en: "C#6" },
  D6: { id: 66, frequency: 1174.659, ja: "レ6", en: "D6" },
  "D#6": { id: 67, frequency: 1244.508, ja: "レ#6", en: "D#6" },
  E6: { id: 68, frequency: 1318.51, ja: "ミ6", en: "E6" },
  F6: { id: 69, frequency: 1396.913, ja: "ファ6", en: "F6" },
  "F#6": { id: 70, frequency: 1479.978, ja: "ファ#6", en: "F#6" },
  G6: { id: 71, frequency: 1567.982, ja: "ソ6", en: "G6" },
  "G#6": { id: 72, frequency: 1661.219, ja: "ソ#6", en: "G#6" },
  A6: { id: 73, frequency: 1760, ja: "ラ6", en: "A6" },
  "A#6": { id: 74, frequency: 1864.655, ja: "ラ#6", en: "A#6" },
  B6: { id: 75, frequency: 1975.533, ja: "シ6", en: "B6" },
  C7: { id: 76, frequency: 2093.005, ja: "ド7", en: "C7" },
  "C#7": { id: 77, frequency: 2217.461, ja: "ド#7", en: "C#7" },
  D7: { id: 78, frequency: 2349.318, ja: "レ7", en: "D7" },
  "D#7": { id: 79, frequency: 2489.016, ja: "レ#7", en: "D#7" },
  E7: { id: 80, frequency: 2637.02, ja: "ミ7", en: "E7" },
  F7: { id: 81, frequency: 2793.826, ja: "ファ7", en: "F7" },
  "F#7": { id: 82, frequency: 2959.955, ja: "ファ#7", en: "F#7" },
  G7: { id: 83, frequency: 3135.963, ja: "ソ7", en: "G7" },
  "G#7": { id: 84, frequency: 3322.438, ja: "ソ#7", en: "G#7" },
  A7: { id: 85, frequency: 3520, ja: "ラ7", en: "A7" },
  "A#7": { id: 86, frequency: 3729.31, ja: "ラ#7", en: "A#7" },
  B7: { id: 87, frequency: 3951.066, ja: "シ7", en: "B7" },
  C8: { id: 88, frequency: 4186.009, ja: "ド8", en: "C8" },
} as Scale;
