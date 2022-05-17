import { useScale } from "@/features/scales/hooks";
import ScaleBase from "@/features/scales/ScaleBase";

export default function LydianScale() {
  const { lydianScale } = useScale();
  const props = {
    title: "リディアンスケール",
    intervals: [
      { name: "Ｒ", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "半", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "半", value: "　", className: "" },
    ],
    tones: lydianScale,
  };

  return <ScaleBase {...props} />;
}
