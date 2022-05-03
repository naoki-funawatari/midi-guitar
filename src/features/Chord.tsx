import { useGuitar } from "@/features/Fingerboard";
import { useRecoilValue } from "recoil";
import { languageStore } from "@/features/Language";
import chord from "@/assets/chord";

export default function Chord() {
  const { sound } = useGuitar();
  const language = useRecoilValue(languageStore);

  return (
    <div className="chord">
      <h2>コード</h2>
      <div>
        <button onClick={sound(chord.C3.frequency)}>
          {chord.C3[language]}
        </button>
        <button onClick={sound(chord.D3.frequency)}>
          {chord.D3[language]}
        </button>
        <button onClick={sound(chord.E3.frequency)}>
          {chord.E3[language]}
        </button>
      </div>
    </div>
  );
}
