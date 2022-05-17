import { useScale } from "@/features/scales/hooks";
import ScaleBase from "@/features/scales/ScaleBase";

export default function LocrianScale() {
  const { locrianScale } = useScale();
  const props = {
    title: "ロクリアンスケール",
    intervals: [
      { name: "Ｒ", value: "　", className: "" },
      { name: "半", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "半", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
    ],
    tones: locrianScale,
  };

  return <ScaleBase {...props} />;
}
