import { useScale } from "@/features/scales/hooks";

export default function MajorScale() {
  const { majorScale } = useScale();

  return (
    <div>
      <h3>メジャースケール</h3>
      <div className="box">
        <span>Ｒ</span>
        <span>全</span>
        <span>全</span>
        <span>半</span>
        <span>全</span>
        <span>全</span>
        <span>全</span>
        <span>半</span>
      </div>
      <div className="box">
        <span className="main">Ｔ</span>
        <span className="sub">ＳＤ</span>
        <span className="sub">Ｔ</span>
        <span className="main">ＳＤ</span>
        <span className="main">Ｄ</span>
        <span className="sub">Ｔ</span>
        <span className="sub">Ｄ</span>
        <span className="main">Ｔ</span>
      </div>
      <div className="box">
        {majorScale.map(o => (
          <span key={`major-scale-${o.id}`}>{o.en}</span>
        ))}
      </div>
    </div>
  );
}
