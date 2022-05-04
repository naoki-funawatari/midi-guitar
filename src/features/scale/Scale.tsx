import { useMemo, useState } from "react";
import tones from "@/assets/scale/tones";
import type { ITone } from "@/assets/scale/tones";

const useScale = () => {
  const [root, setRoot] = useState(28);
  const temp = useMemo(
    () => [...tones.filter(o => o.id >= root).slice(0, 12)],
    [root]
  );
  const interval = {
    major: [0, 2, 2, 1, 2, 2, 2],
    minor: [0, 2, 1, 2, 2, 1, 2],
    majorPentatonic: [0, 2, 2, 3, 2],
    minorPentatonic: [0, 3, 2, 2, 3],
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
    setRoot,
  };
};

export default function Scale() {
  const { majorScale, minorScale, majorPentatonicScale, minorPentatonicScale } =
    useScale();

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
