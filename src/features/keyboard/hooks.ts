import { useMemo } from "react";
import tones from "@/assets/scale/tones";

export const usePianoScale = () => {
  const scale = useMemo(
    () => [...tones.filter(o => o.id >= 28).slice(0, 24)],
    []
  );

  return { scale };
};
