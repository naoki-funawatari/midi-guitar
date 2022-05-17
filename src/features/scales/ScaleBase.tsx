import type { ITone } from "@/assets/scale/tones";
import Keyboard from "@/features/keyboard/Keyboard";

interface Props {
  title: string;
  intervals: {
    name: string;
    value: string;
    className: string;
  }[];
  tones: {
    tone: ITone;
    position: number;
  }[];
}

export default function ScaleBase(props: Props) {
  const { title, intervals, tones } = props;

  return (
    <>
      <div>
        <h3>{title}</h3>
        <div className="box">
          {intervals.map((o, i) => (
            <span key={i}>{o.name}</span>
          ))}
        </div>
        <div className="box">
          {intervals.map((o, i) => (
            <span className={o.className} key={i}>
              {o.value}
            </span>
          ))}
        </div>
        <div className="box">
          {tones.map(o => (
            <span key={`${title}-${o.tone.id}`}>{o.tone.en}</span>
          ))}
        </div>
      </div>
      <br />
      <Keyboard {...props} />
    </>
  );
}
