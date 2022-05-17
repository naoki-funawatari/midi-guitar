import { useScale } from "@/features/scales/hooks";
import ScaleBase from "@/features/scales/ScaleBase";

export default function DorianScale() {
  const { dorianScale } = useScale();
  const props = {
    title: "ドリアンスケール",
    intervals: [
      { name: "Ｒ", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "半", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "半", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
    ],
    tones: dorianScale,
  };

  return <ScaleBase {...props} />;
}
