import { useCallback, useMemo } from "react";
import fingerboard from "@/assets/fingerboard";
import String from "@/features/String";

export const useGuitar = () => {
  const strings = useMemo(() => {
    const strings = Object.entries(fingerboard).map(o => ({
      stringNo: o[0],
      scale: o[1],
    }));
    return strings.sort((a, b) => b.stringNo.localeCompare(a.stringNo));
  }, []);

  // http://var.blog.jp/archives/84027358.html
  // http://curtaincall.weblike.jp/portfolio-web-sounder/webaudioapi-basic/oscillator
  const sound = useCallback(
    (frequency: number[]) => async () => {
      for (const o of frequency) {
        const audioContext = new AudioContext();
        const gainNode = audioContext.createGain();
        gainNode.gain.value = 0.01;
        gainNode.connect(audioContext.destination);
        const oscillator = audioContext.createOscillator();
        oscillator.type = "sawtooth";
        oscillator.frequency.value = o;
        oscillator.connect(gainNode);
        // https://www.g200kg.com/jp/docs/webaudio/oscillator.html
        oscillator.start();
        oscillator.stop(0.3);
        await new Promise(resolve => setTimeout(() => resolve(true), 0));
      }
    },
    []
  );

  return { strings, sound };
};

export default function Fingerboard() {
  const { strings, sound } = useGuitar();

  return (
    <div className="fingerboard">
      <div className="string">
        <div>&nbsp;</div>
        {[...Array(23).keys()].map(o => (
          <div key={o} className="fret fret-no">
            {o}
          </div>
        ))}
      </div>
      {strings.map(string => {
        const key = `strings-${string.stringNo}`;
        return <String key={key} {...{ ...string, sound }} />;
      })}
    </div>
  );
}
