import { useScale } from "@/features/scales/hooks";
import ScaleBase from "@/features/scales/ScaleBase";

export default function PhrygianScale() {
  const { phrygianScale } = useScale();
  const props = {
    title: "フリジアンスケール",
    intervals: [
      { name: "Ｒ", value: "　", className: "" },
      { name: "半", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "半", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
    ],
    tones: phrygianScale,
  };

  return <ScaleBase {...props} />;
}
