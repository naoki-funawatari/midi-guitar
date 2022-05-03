import { useGuitar } from "@/features/Fingerboard";
import chord from "@/assets/chord";

export default function Chord() {
  const { sound } = useGuitar();

  return (
    <div className="chord">
      <h2>コード</h2>
      <div>
        <button onClick={sound(chord.C3.frequency)}>{chord.C3.ja}</button>
        <button onClick={sound(chord.D3.frequency)}>{chord.D3.ja}</button>
        <button onClick={sound(chord.E3.frequency)}>{chord.E3.ja}</button>
      </div>
    </div>
  );
}
