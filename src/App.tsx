/* eslint-disable @typescript-eslint/no-unused-vars */
import fingerboard from "@/assets/fingerboard";
import "@/assets/style.scss";

// http://var.blog.jp/archives/84027358.html
// http://curtaincall.weblike.jp/portfolio-web-sounder/webaudioapi-basic/oscillator
const sound = (frequency: number) => {
  const audioContext = new AudioContext();
  const gainNode = audioContext.createGain();
  gainNode.gain.value = 0.1;
  gainNode.connect(audioContext.destination);
  const oscillator = audioContext.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  oscillator.detune.value = 300;
  oscillator.connect(gainNode);
  // https://www.g200kg.com/jp/docs/webaudio/oscillator.html
  oscillator.start();
  oscillator.stop(0.3);
};

const useGuitar = () => {
  const strings = Object.entries(fingerboard);
  strings.sort((a, b) => b[0].localeCompare(a[0]));
  return { strings };
};

export default function App() {
  const { strings } = useGuitar();
  return (
    <div className="fingerboard">
      <div className="string">
        <div>&nbsp;</div>
        {[...Array(23).keys()].map(o => (
          <div key={o} className="fret no-border">
            {o}
          </div>
        ))}
      </div>
      {strings.map(string => (
        <div key={`strings-${string[0]}`} className="string">
          <div>{string[0]}</div>
          {string[1].map(fret => (
            <div key={`strings-${string[0]}-flet-${fret.id}`} className="fret">
              {fret.ja}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
