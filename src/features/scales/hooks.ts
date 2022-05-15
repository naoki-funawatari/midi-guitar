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
  const interval = {
    major: [0, 2, 2, 1, 2, 2, 2, 1],
    minor: [0, 2, 1, 2, 2, 1, 2, 2],
    majorPentatonic: [0, 2, 2, 3, 2, 3],
    minorPentatonic: [0, 3, 2, 2, 3, 2],
  };
  const majorScale = useMemo(() => {
    const scale: ITone[] = [];
    interval.major.reduce((prev, curr) => {
      scale.push(temp[prev + curr]);
      return prev + curr;
    }, 0);

    return scale;
  }, [interval.major, temp]);
  const minorScale = useMemo(() => {
    const scale: ITone[] = [];
    interval.minor.reduce((prev, curr) => {
      scale.push(temp[prev + curr]);
      return prev + curr;
    }, 0);

    return scale;
  }, [interval.minor, temp]);
  const majorPentatonicScale = useMemo(() => {
    const scale: ITone[] = [];
    interval.majorPentatonic.reduce((prev, curr) => {
      scale.push(temp[prev + curr]);
      return prev + curr;
    }, 0);

    return scale;
  }, [interval.majorPentatonic, temp]);
  const minorPentatonicScale = useMemo(() => {
    const scale: ITone[] = [];
    interval.minorPentatonic.reduce((prev, curr) => {
      scale.push(temp[prev + curr]);
      return prev + curr;
    }, 0);

    return scale;
  }, [interval.minorPentatonic, temp]);

  return {
    majorScale,
    minorScale,
    majorPentatonicScale,
    minorPentatonicScale,
  };
};
