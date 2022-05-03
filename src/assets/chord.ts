import scale from "@/assets/scale";

export type Chord = {
  [index: string]: {
    [key: string]: string | number[];
    frequency: number[];
    ja: string;
    en: string;
  };
};

export default {
  C3: {
    frequency: [scale.C3.frequency, scale.E3.frequency, scale.G3.frequency],
    ja: "ド3",
    en: "C3",
  },
  D3: {
    frequency: [scale.D3.frequency, scale.F3.frequency, scale.A3.frequency],
    ja: "レ3",
    en: "D3",
  },
  E3: {
    frequency: [scale.E3.frequency, scale.G3.frequency, scale.B3.frequency],
    ja: "ミ3",
    en: "E3",
  },
} as Chord;
