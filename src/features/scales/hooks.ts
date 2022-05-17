import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { toneSelectorStore } from "@/features/scales/ToneSelector";
import tones from "@/assets/scale/tones";
import type { ITone } from "@/assets/scale/tones";

export const useScale = () => {
  const root = useRecoilValue(toneSelectorStore);
  const temp = useMemo(
    () => [...tones.filter(o => o.id >= root.current).slice(0, 24)],
    [root]
  );
  const intervals = {
    ionian: [0, 2, 2, 1, 2, 2, 2, 1],
    dorian: [0, 2, 1, 2, 2, 2, 1, 2],
    phrygian: [0, 1, 2, 2, 2, 1, 2, 2],
    lydian: [0, 2, 2, 2, 1, 2, 2, 1],
    mixolydian: [0, 2, 2, 1, 2, 2, 1, 2],
    aeolian: [0, 2, 1, 2, 2, 1, 2, 2],
    locrian: [0, 1, 2, 2, 1, 2, 2, 2],
    majorPentatonic: [0, 2, 2, 3, 2, 3],
    minorPentatonic: [0, 3, 2, 2, 3, 2],
  };

  const createScale = (interval: number[]) => {
    const scale: { tone: ITone; position: number }[] = [];

    interval.reduce((prev, curr) => {
      const index = prev + curr;
      scale.push({
        tone: temp[index],
        position: root.current - root.default + index + 1,
      });

      return prev + curr;
    }, 0);

    return scale;
  };

  const majorScale = createScale(intervals.ionian);
  const dorianScale = createScale(intervals.dorian);
  const phrygianScale = createScale(intervals.phrygian);
  const lydianScale = createScale(intervals.lydian);
  const mixolydianScale = createScale(intervals.mixolydian);
  const minorScale = createScale(intervals.aeolian);
  const locrianScale = createScale(intervals.locrian);
  const majorPentatonicScale = createScale(intervals.majorPentatonic);
  const minorPentatonicScale = createScale(intervals.minorPentatonic);

  return {
    majorScale,
    dorianScale,
    phrygianScale,
    lydianScale,
    mixolydianScale,
    minorScale,
    locrianScale,
    majorPentatonicScale,
    minorPentatonicScale,
  };
};
