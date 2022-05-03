import tones from "@/assets/scale/tones";
import type { ITone } from "@/assets/scale/tones";
import { useState } from "react";

const useScale = () => {
  const interval = {
    major: [0, 2, 2, 1, 2, 2, 2],
    minor: [0, 2, 1, 2, 2, 1, 2],
    majorPentatonic: [0, 2, 2, 3, 2],
    minorPentatonic: [0, 3, 2, 2, 3],
  };
  const [root, setRoot] = useState(28);
  const majorScale = () => {
    const scale: ITone[] = [];
    const temp = [...tones.filter(o => o.id >= root).slice(0, 12)];
    interval.major.reduce((prev, curr) => {
      scale.push(temp[prev + curr]);
      return prev + curr;
    }, 0);

    return scale;
  };
  const minorScale = () => {
    const scale: ITone[] = [];
    const temp = [...tones.filter(o => o.id >= root).slice(0, 12)];
    interval.minor.reduce((prev, curr) => {
      scale.push(temp[prev + curr]);
      return prev + curr;
    }, 0);

    return scale;
  };
  const majorPentatonicScale = () => {
    const scale: ITone[] = [];
    const temp = [...tones.filter(o => o.id >= root).slice(0, 12)];
    interval.majorPentatonic.reduce((prev, curr) => {
      scale.push(temp[prev + curr]);
      return prev + curr;
    }, 0);

    return scale;
  };
  const minorPentatonicScale = () => {
    const scale: ITone[] = [];
    const temp = [...tones.filter(o => o.id >= root).slice(0, 12)];
    interval.minorPentatonic.reduce((prev, curr) => {
      scale.push(temp[prev + curr]);
      return prev + curr;
    }, 0);

    return scale;
  };

  return {
    majorScale,
    minorScale,
    majorPentatonicScale,
    minorPentatonicScale,
    setRoot,
  };
};

export default function Scale() {
  const scale = useScale();
  const majorScale = scale.majorScale();
  const minorScale = scale.minorScale();
  const majorPentatonicScale = scale.majorPentatonicScale();
  const minorPentatonicScale = scale.minorPentatonicScale();

  return (
    <div className="scale">
      <h1>スケール</h1>
      <h2>メジャースケール</h2>
      <div className="box">
        <span>全</span>
        <span>全</span>
        <span>半</span>
        <span>全</span>
        <span>全</span>
        <span>全</span>
        <span>半</span>
      </div>
      <div className="box">
        <span>Ⅰ</span>
        <span>Ⅱm</span>
        <span>Ⅲm</span>
        <span>Ⅳ</span>
        <span>Ⅴ</span>
        <span>Ⅵm</span>
        <span>Ⅶm(♭5)</span>
      </div>
      <div className="box">
        {majorScale.map(o => (
          <span key={`major-scale-${o.id}`}>{o.en}</span>
        ))}
      </div>
      <h2>マイナースケール</h2>
      <div className="box">
        <span>全</span>
        <span>半</span>
        <span>全</span>
        <span>全</span>
        <span>半</span>
        <span>全</span>
        <span>全</span>
      </div>
      <div className="box">
        <span>Ⅰ</span>
        <span>Ⅱm</span>
        <span>Ⅲm</span>
        <span>Ⅳ</span>
        <span>Ⅴ</span>
        <span>Ⅵm</span>
        <span>Ⅶm(♭5)</span>
      </div>
      <div className="box">
        {minorScale.map(o => (
          <span key={`minor-scale-${o.id}`}>{o.en}</span>
        ))}
      </div>
      <h2>メジャーペンタトニックスケール</h2>
      <div className="box">
        <span>全</span>
        <span>全</span>
        <span>半</span>
        <span>全</span>
        <span>全</span>
      </div>
      <div className="box">
        <span>Ⅰ</span>
        <span>Ⅱm</span>
        <span>Ⅲm</span>
        <span>Ⅴ</span>
        <span>Ⅵm</span>
      </div>
      <div className="box">
        {majorPentatonicScale.map(o => (
          <span key={`major-pentatonic-scale-${o.id}`}>{o.en}</span>
        ))}
      </div>
      <h2>マイナーペンタトニックスケール</h2>
      <div className="box">
        <span>全</span>
        <span>全</span>
        <span>全</span>
        <span>半</span>
        <span>全</span>
      </div>
      <div className="box">
        <span>Ⅰ</span>
        <span>Ⅲm</span>
        <span>Ⅳ</span>
        <span>Ⅴ</span>
        <span>Ⅶm(♭5)</span>
      </div>
      <div className="box">
        {minorPentatonicScale.map(o => (
          <span key={`minor-pentatonic-scale-${o.id}`}>{o.en}</span>
        ))}
      </div>
    </div>
  );
}
