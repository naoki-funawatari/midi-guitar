/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import scale from "@/assets/scale";
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

export default function App() {
  const [volume, setVolume] = useState(0.1);

  return (
    <div>
      <div className="red">hello world!</div>
      <div>{volume}</div>
      <div>
        <button onClick={() => setVolume(state => state + 0.1)}>
          ボリューム＋
        </button>
        <button onClick={() => setVolume(state => state - 0.1)}>
          ボリューム－
        </button>
      </div>
      <div>
        {scale.map(s => (
          <button key={s.id} onClick={() => sound(s.frequency)}>
            {s.name}
          </button>
        ))}
      </div>
    </div>
  );
}
