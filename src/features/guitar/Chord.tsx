import { useRecoilValue } from "recoil";
import { useGuitar } from "@/features/guitar/Fingerboard";
import { languageStore } from "@/features/guitar/Language";
import chord from "@/assets/guitar/chord";

export default function Chord() {
  const { sound } = useGuitar();
  const language = useRecoilValue(languageStore);

  return (
    <div className="chord">
      <h2>コード</h2>
      <div>
        <button onClick={sound(chord.C3.frequencies)}>
          {chord.C3[language]}
        </button>
      </div>
      <div>
        <button onClick={sound(chord.D3.frequencies)}>
          {chord.D3[language]}
        </button>
      </div>
      <div>
        <button onClick={sound(chord.E3.frequencies)}>
          {chord.E3[language]}
        </button>
      </div>
    </div>
  );
}
