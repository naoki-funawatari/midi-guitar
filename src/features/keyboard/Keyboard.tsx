import { usePianoScale } from "@/features/keyboard/hooks";

export default function Keyboard() {
  const { scale } = usePianoScale();
  const backItems = [
    { colSpan: 4, className: "back white-key", tone: undefined },
    { colSpan: 4, className: "back black-key", tone: scale[1] },
    { colSpan: 2, className: "back white-key", tone: undefined },
    { colSpan: 4, className: "back black-key", tone: scale[3] },
    { colSpan: 4, className: "back white-key", tone: undefined },
    { colSpan: 3, className: "back white-key", tone: undefined },
    { colSpan: 4, className: "back black-key", tone: scale[6] },
    { colSpan: 3, className: "back white-key", tone: undefined },
    { colSpan: 4, className: "back black-key", tone: scale[8] },
    { colSpan: 3, className: "back white-key", tone: undefined },
    { colSpan: 4, className: "back black-key", tone: scale[10] },
    { colSpan: 3, className: "back white-key", tone: undefined },
    { colSpan: 4, className: "back white-key", tone: undefined },
    { colSpan: 4, className: "back black-key", tone: scale[13] },
    { colSpan: 2, className: "back white-key", tone: undefined },
    { colSpan: 4, className: "back black-key", tone: scale[15] },
    { colSpan: 4, className: "back white-key", tone: undefined },
    { colSpan: 3, className: "back white-key", tone: undefined },
    { colSpan: 4, className: "back black-key", tone: scale[18] },
    { colSpan: 3, className: "back white-key", tone: undefined },
    { colSpan: 4, className: "back black-key", tone: scale[20] },
    { colSpan: 3, className: "back white-key", tone: undefined },
    { colSpan: 4, className: "back black-key", tone: scale[22] },
    { colSpan: 3, className: "back white-key", tone: undefined },
  ];
  const frontItems = [
    { colSpan: 6, className: "front white-key", tone: scale[0] },
    { colSpan: 6, className: "front white-key", tone: scale[2] },
    { colSpan: 6, className: "front white-key", tone: scale[4] },
    { colSpan: 6, className: "front white-key", tone: scale[5] },
    { colSpan: 6, className: "front white-key", tone: scale[7] },
    { colSpan: 6, className: "front white-key", tone: scale[9] },
    { colSpan: 6, className: "front white-key", tone: scale[11] },
    { colSpan: 6, className: "front white-key", tone: scale[12] },
    { colSpan: 6, className: "front white-key", tone: scale[14] },
    { colSpan: 6, className: "front white-key", tone: scale[16] },
    { colSpan: 6, className: "front white-key", tone: scale[17] },
    { colSpan: 6, className: "front white-key", tone: scale[19] },
    { colSpan: 6, className: "front white-key", tone: scale[21] },
    { colSpan: 6, className: "front white-key", tone: scale[23] },
  ];

  return (
    <table className="keyboard">
      <tbody>
        <tr>
          {backItems.map((o, i) => {
            return (
              <td key={i} colSpan={o.colSpan} className={o.className}>
                {o.tone && (
                  <div>
                    <div>{o.tone.en}</div>
                    <div>{o.tone.ja}</div>
                    <div></div>
                  </div>
                )}
              </td>
            );
          })}
        </tr>
        <tr>
          {frontItems.map((o, i) => {
            return (
              <td key={i} colSpan={o.colSpan} className={o.className}>
                {o.tone && (
                  <div>
                    <div>{o.tone.en}</div>
                    <div>{o.tone.ja}</div>
                    <div></div>
                  </div>
                )}
              </td>
            );
          })}
        </tr>
        <tr>
          {[...Array(84)].map((o, i) => (
            <td key={i}></td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
