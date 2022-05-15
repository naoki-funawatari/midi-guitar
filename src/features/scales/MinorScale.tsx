import { useScale } from "@/features/scales/hooks";

export default function MinorScale() {
  const { minorScale } = useScale();

  return (
    <div>
      <h3>マイナースケール</h3>
      <div className="box">
        <span>Ｒ</span>
        <span>全</span>
        <span>半</span>
        <span>全</span>
        <span>全</span>
        <span>半</span>
        <span>全</span>
        <span>全</span>
      </div>
      <div className="box">
        <span className="main">Ｔ</span>
        <span className="sub">ＳＤ</span>
        <span className="sub">Ｔ</span>
        <span className="main">ＳＤ</span>
        <span className="main">Ｄ</span>
        <span className="sub">ＳＤ</span>
        <span className="sub">Ｄ</span>
        <span className="main">Ｔ</span>
      </div>
      <div className="box">
        {minorScale.map(o => (
          <span key={`minor-scale-${o.id}`}>{o.en}</span>
        ))}
      </div>
    </div>
  );
}
