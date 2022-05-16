import { useScale } from "@/features/scales/hooks";
import ScaleBase from "@/features/scales/ScaleBase";
import Keyboard from "@/features/keyboard/Keyboard";

export default function MajorPentatonicScale() {
  const { majorPentatonicScale } = useScale();
  const props = {
    title: "メジャーペンタトニックスケール",
    intervals: [
      { name: "Ｒ", value: "Ｔ", className: "main" },
      { name: "全", value: "ＳＤ", className: "sub" },
      { name: "全", value: "Ｔ", className: "sub" },
      { name: "(半+全)", value: "Ｄ", className: "main" },
      { name: "全", value: "Ｔ", className: "sub" },
      { name: "(半+全)", value: "Ｔ", className: "main" },
    ],
    tones: majorPentatonicScale,
  };

  return (
    <>
      <ScaleBase {...props} />
      <br />
      <Keyboard {...{ tones: majorPentatonicScale }} />
    </>
  );
}
