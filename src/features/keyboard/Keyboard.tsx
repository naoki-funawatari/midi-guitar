import { usePianoScale } from "@/features/keyboard/hooks";
import Keys from "@/features/keyboard/Keys";

export default function Keyboard() {
  const { scale } = usePianoScale();
  const backItems = [
    {
      colSpan: 4,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
    {
      colSpan: 4,
      className: "back black-key",
      tone: scale[1],
      interval: 2,
    },
    {
      colSpan: 2,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
    {
      colSpan: 4,
      className: "back black-key",
      tone: scale[3],
      interval: 4,
    },
    {
      colSpan: 4,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
    {
      colSpan: 3,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
    {
      colSpan: 4,
      className: "back black-key",
      tone: scale[6],
      interval: 7,
    },
    {
      colSpan: 3,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
    {
      colSpan: 4,
      className: "back black-key",
      tone: scale[8],
      interval: 9,
    },
    {
      colSpan: 3,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
    {
      colSpan: 4,
      className: "back black-key",
      tone: scale[10],
      interval: 11,
    },
    {
      colSpan: 3,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
    {
      colSpan: 4,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
    {
      colSpan: 4,
      className: "back black-key",
      tone: scale[13],
      interval: 14,
    },
    {
      colSpan: 2,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
    {
      colSpan: 4,
      className: "back black-key",
      tone: scale[15],
      interval: 16,
    },
    {
      colSpan: 4,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
    {
      colSpan: 3,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
    {
      colSpan: 4,
      className: "back black-key",
      tone: scale[18],
      interval: 19,
    },
    {
      colSpan: 3,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
    {
      colSpan: 4,
      className: "back black-key",
      tone: scale[20],
      interval: 21,
    },
    {
      colSpan: 3,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
    {
      colSpan: 4,
      className: "back black-key",
      tone: scale[22],
      interval: 23,
    },
    {
      colSpan: 3,
      className: "back white-key",
      tone: undefined,
      interval: undefined,
    },
  ];
  const frontItems = [
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[0],
      interval: 1,
    },
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[2],
      interval: 3,
    },
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[4],
      interval: 5,
    },
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[5],
      interval: 6,
    },
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[7],
      interval: 8,
    },
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[9],
      interval: 10,
    },
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[11],
      interval: 12,
    },
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[12],
      interval: 13,
    },
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[14],
      interval: 15,
    },
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[16],
      interval: 17,
    },
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[17],
      interval: 18,
    },
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[19],
      interval: 20,
    },
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[21],
      interval: 22,
    },
    {
      colSpan: 6,
      className: "front white-key",
      tone: scale[23],
      interval: 24,
    },
  ];
  const blankItems = [...Array(84)].map(() => ({
    colSpan: 1,
    className: "",
    tone: undefined,
    interval: undefined,
  }));

  return (
    <table className="keyboard">
      <tbody>
        <Keys {...{ list: backItems }} />
        <Keys {...{ list: frontItems }} />
        <Keys {...{ list: blankItems }} />
      </tbody>
    </table>
  );
}
