import { useScale } from "@/features/scales/hooks";
import ScaleBase from "@/features/scales/ScaleBase";

export default function MinorPentatonicScale() {
  const { minorPentatonicScale } = useScale();
  const props = {
    title: "マイナーペンタトニックスケール",
    intervals: [
      { name: "Ｒ", value: "Ｔ", className: "main" },
      { name: "全", value: "Ｔ", className: "sub" },
      { name: "(半+全)", value: "ＳＤ", className: "main" },
      { name: "全", value: "Ｄ", className: "main" },
      { name: "半", value: "Ｄ", className: "sub" },
      { name: "(全+半)", value: "Ｔ", className: "main" },
    ],
    tones: minorPentatonicScale,
  };

  return <ScaleBase {...props} />;
}
