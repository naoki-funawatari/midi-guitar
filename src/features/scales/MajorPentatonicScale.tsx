import { useScale } from "@/features/scales/hooks";

export default function MajorPentatonicScale() {
  const { majorPentatonicScale } = useScale();

  return (
    <div>
      <h3>メジャーペンタトニックスケール</h3>
      <div className="box">
        <span>Ｒ</span>
        <span>全</span>
        <span>全</span>
        <span>(半+全)</span>
        <span>全</span>
        <span>(半+全)</span>
      </div>
      <div className="box">
        <span className="main">Ｔ</span>
        <span className="sub">ＳＤ</span>
        <span className="sub">Ｔ</span>
        <span className="main">Ｄ</span>
        <span className="sub">Ｔ</span>
        <span className="main">Ｔ</span>
      </div>
      <div className="box">
        {majorPentatonicScale.map(o => (
          <span key={`major-pentatonic-scale-${o.id}`}>{o.en}</span>
        ))}
      </div>
    </div>
  );
}
