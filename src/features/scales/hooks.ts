import { useMemo } from "react";
import { toneSelectorStore } from "@/features/scales/ToneSelector";
import tones from "@/assets/scale/tones";
import type { ITone } from "@/assets/scale/tones";
import { useRecoilValue } from "recoil";

export const useScale = () => {
  const root = useRecoilValue(toneSelectorStore);
  const temp = useMemo(
    () => [...tones.filter(o => o.id >= root).slice(0, 13)],
    [root]
  );
  const intervals = {
    major: [0, 2, 2, 1, 2, 2, 2, 1],
    minor: [0, 2, 1, 2, 2, 1, 2, 2],
    majorPentatonic: [0, 2, 2, 3, 2, 3],
    minorPentatonic: [0, 3, 2, 2, 3, 2],
  };
  const majorScale = useMemo(() => {
    const scale: ITone[] = [];
    intervals.major.reduce((prev, curr) => {
      scale.push(temp[prev + curr]);
      return prev + curr;
    }, 0);

    return scale;
  }, [intervals.major, temp]);
  const minorScale = useMemo(() => {
    const scale: ITone[] = [];
    intervals.minor.reduce((prev, curr) => {
      scale.push(temp[prev + curr]);
      return prev + curr;
    }, 0);

    return scale;
  }, [intervals.minor, temp]);
  const majorPentatonicScale = useMemo(() => {
    const scale: ITone[] = [];
    intervals.majorPentatonic.reduce((prev, curr) => {
      scale.push(temp[prev + curr]);
      return prev + curr;
    }, 0);

    return scale;
  }, [intervals.majorPentatonic, temp]);
  const minorPentatonicScale = useMemo(() => {
    const scale: ITone[] = [];
    intervals.minorPentatonic.reduce((prev, curr) => {
      scale.push(temp[prev + curr]);
      return prev + curr;
    }, 0);

    return scale;
  }, [intervals.minorPentatonic, temp]);

  return {
    majorScale,
    minorScale,
    majorPentatonicScale,
    minorPentatonicScale,
  };
};
