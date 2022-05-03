import fingerboard from "@/assets/fingerboard";
import { useCallback, useMemo } from "react";

export const useGuitar = () => {
  const strings = useMemo(() => {
    const strings = Object.entries(fingerboard);
    return strings.sort((a, b) => b[0].localeCompare(a[0]));
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
        const [stringNo, frets] = string;
        const key = `strings-${stringNo}`;
        return (
          <div key={key} className="string">
            <div>{stringNo}弦</div>
            {Object.values(frets).map(fret => {
              const key = `strings-${stringNo}-flet-${fret.id}`;
              return (
                <div key={key} className="fret">
                  <button onClick={sound([fret.frequency])}>{fret.ja}</button>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
