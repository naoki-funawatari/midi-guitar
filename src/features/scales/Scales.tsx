import ToneSelector from "@/features/scales/ToneSelector";
import MajorScale from "@/features/scales/MajorScale";
import MinorScale from "@/features/scales/MinorScale";
import MajorPentatonicScale from "@/features/scales/MajorPentatonicScale";
import MinorPentatonicScale from "@/features/scales/MinorPentatonicScale";

export default function Scale() {
  return (
    <div className="scale">
      <h1>スケール</h1>
      <ToneSelector />
      <MajorScale />
      <MinorScale />
      <MajorPentatonicScale />
      <MinorPentatonicScale />
    </div>
  );
}
/*
      <div className="box">
        <span>Ⅰ</span>
        <span>Ⅱm</span>
        <span>Ⅲm</span>
        <span>Ⅳ</span>
        <span>Ⅴ</span>
        <span>Ⅵm</span>
        <span>Ⅶm(♭5)</span>
      </div>
      <div className="box">
        <span>Ⅰm</span>
        <span>Ⅱm(♭5)</span>
        <span>Ⅲ</span>
        <span>Ⅳm</span>
        <span>Ⅴm</span>
        <span>Ⅵ</span>
        <span>Ⅶ</span>
      </div>
      <div className="box">
        <span>Ⅰ</span>
        <span>Ⅱm</span>
        <span>Ⅲm</span>
        <span>Ⅴ</span>
        <span>Ⅵm</span>
      </div>
      <div className="box">
        <span>Ⅰm</span>
        <span>Ⅲ</span>
        <span>Ⅳm</span>
        <span>Ⅴm</span>
        <span>Ⅶ</span>
      </div>
*/
