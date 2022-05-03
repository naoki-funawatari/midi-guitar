import scale from "@/assets/scale";

export type Chord = {
  [index: string]: {
    [key: string]: string | number[];
    frequencies: number[];
    ja: string;
    en: string;
  };
};

export default {
  C3: {
    frequencies: [scale.C3.frequency, scale.E3.frequency, scale.G3.frequency],
    ja: "ド",
    en: "C",
  },
  D3: {
    frequencies: [scale.D3.frequency, scale.F3.frequency, scale.A3.frequency],
    ja: "レ",
    en: "D",
  },
  E3: {
    frequencies: [scale.E3.frequency, scale.G3.frequency, scale.B3.frequency],
    ja: "ミ",
    en: "E",
  },
} as Chord;
