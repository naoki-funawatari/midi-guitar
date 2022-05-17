import { useScale } from "@/features/scales/hooks";
import ScaleBase from "@/features/scales/ScaleBase";

export default function MixolydianScale() {
  const { mixolydianScale } = useScale();
  const props = {
    title: "ミクソリディアンスケール",
    intervals: [
      { name: "Ｒ", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "半", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
      { name: "半", value: "　", className: "" },
      { name: "全", value: "　", className: "" },
    ],
    tones: mixolydianScale,
  };

  return <ScaleBase {...props} />;
}
