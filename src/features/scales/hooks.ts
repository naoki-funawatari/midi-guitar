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
    major: [0, 2, 2, 1, 2, 2, 2, 1],
    minor: [0, 2, 1, 2, 2, 1, 2, 2],
    majorPentatonic: [0, 2, 2, 3, 2, 3],
    minorPentatonic: [0, 3, 2, 2, 3, 2],
  };
  const majorScale = useMemo(() => {
    const scale: { tone: ITone; position: number }[] = [];
    intervals.major.reduce((prev, curr) => {
      const index = prev + curr;
      scale.push({
        tone: temp[index],
        position: root.current - root.default + index + 1,
      });
      return prev + curr;
    }, 0);

    return scale;
  }, [intervals.major, temp, root]);
  const minorScale = useMemo(() => {
    const scale: { tone: ITone; position: number }[] = [];
    intervals.minor.reduce((prev, curr) => {
      const index = prev + curr;
      scale.push({
        tone: temp[index],
        position: root.current - root.default + index + 1,
      });
      return prev + curr;
    }, 0);

    return scale;
  }, [intervals.minor, temp, root]);
  const majorPentatonicScale = useMemo(() => {
    const scale: { tone: ITone; position: number }[] = [];
    intervals.majorPentatonic.reduce((prev, curr) => {
      const index = prev + curr;
      scale.push({
        tone: temp[index],
        position: root.current - root.default + index + 1,
      });
      return prev + curr;
    }, 0);

    return scale;
  }, [intervals.majorPentatonic, temp, root]);
  const minorPentatonicScale = useMemo(() => {
    const scale: { tone: ITone; position: number }[] = [];
    intervals.minorPentatonic.reduce((prev, curr) => {
      const index = prev + curr;
      scale.push({
        tone: temp[index],
        position: root.current - root.default + index + 1,
      });
      return prev + curr;
    }, 0);

    return scale;
  }, [intervals.minorPentatonic, temp, root]);

  return {
    majorScale,
    minorScale,
    majorPentatonicScale,
    minorPentatonicScale,
  };
};
