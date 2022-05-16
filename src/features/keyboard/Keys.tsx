import type { ITone } from "@/assets/scale/tones";

interface Props {
  list: {
    colSpan: number;
    className: string;
    tone: ITone | undefined;
    interval: number | undefined;
  }[];
  tones: {
    tone: ITone;
    position: number;
  }[];
}

export default function Keys(porps: Props) {
  const { list, tones } = porps;
  const positions = tones.map(o => o.position);

  return (
    <tr>
      {list.map((o, i) => {
        return (
          <td key={i} colSpan={o.colSpan} className={o.className}>
            {o.tone && o.interval && (
              <div>
                <div>{o.tone.en}</div>
                <div>{o.tone.ja}</div>
                <div>{o.interval}</div>
                <div>{positions.includes(o.interval) ? "○" : "✕"}</div>
              </div>
            )}
          </td>
        );
      })}
    </tr>
  );
}
