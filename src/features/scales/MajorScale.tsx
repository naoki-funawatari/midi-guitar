import { useScale } from "@/features/scales/hooks";
import ScaleBase from "@/features/scales/ScaleBase";
import Keyboard from "@/features/keyboard/Keyboard";

export default function MajorScale() {
  const { majorScale } = useScale();
  const props = {
    title: "メジャースケール",
    intervals: [
      { name: "Ｒ", value: "Ｔ", className: "main" },
      { name: "全", value: "ＳＤ", className: "sub" },
      { name: "全", value: "Ｔ", className: "sub" },
      { name: "半", value: "ＳＤ", className: "main" },
      { name: "全", value: "Ｄ", className: "main" },
      { name: "全", value: "Ｔ", className: "sub" },
      { name: "全", value: "Ｄ", className: "sub" },
      { name: "半", value: "Ｔ", className: "main" },
    ],
    tones: majorScale,
  };

  return (
    <>
      <ScaleBase {...props} />
      <br />
      <Keyboard {...{ tones: majorScale }} />
    </>
  );
}
