import fingerboard from "@/assets/fingerboard";

// http://var.blog.jp/archives/84027358.html
// http://curtaincall.weblike.jp/portfolio-web-sounder/webaudioapi-basic/oscillator
const sound = (frequency: number) => () => {
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

export default function Fingerboard() {
  const { strings } = useGuitar();
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
            {frets.map(fret => {
              const key = `strings-${stringNo}-flet-${fret.id}`;
              return (
                <div key={key} className="fret">
                  <button onClick={sound(fret.frequency)}>{fret.ja}</button>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
