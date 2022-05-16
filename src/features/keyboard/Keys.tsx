import type { ITone } from "@/assets/scale/tones";

interface Props {
  list: {
    colSpan: number;
    className: string;
    tone: ITone | undefined;
    interval: number | undefined;
  }[];
}

export default function Keys(porps: Props) {
  const { list } = porps;

  return (
    <tr>
      {list.map((o, i) => {
        return (
          <td key={i} colSpan={o.colSpan} className={o.className}>
            {o.tone && (
              <div>
                <div>{o.tone.en}</div>
                <div>{o.tone.ja}</div>
                <div>{o.interval}</div>
              </div>
            )}
          </td>
        );
      })}
    </tr>
  );
}
