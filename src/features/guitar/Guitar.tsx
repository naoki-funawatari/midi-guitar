import Language from "@/features/guitar/Language";
import Fingerboard from "@/features/guitar/Fingerboard";
import Chord from "@/features/guitar/Chord";

export default function Guitar() {
  return (
    <div className="guitar">
      <Language />
      <Fingerboard />
      <Chord />
    </div>
  );
}
