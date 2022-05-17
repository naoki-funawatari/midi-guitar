import { useNavigate } from "react-router-dom";

export default function ScaleSelector() {
  const navigate = useNavigate();

  return (
    <div className="horizontal-buttons wrap">
      <div>
        <button onClick={() => navigate("major")}>メジャースケール</button>
      </div>
      <div>
        <button onClick={() => navigate("dorian")}>ドリアンスケール</button>
      </div>
      <div>
        <button onClick={() => navigate("phrygian")}>フリジアンスケール</button>
      </div>
      <div>
        <button onClick={() => navigate("lydian")}>リディアンスケール</button>
      </div>
      <div>
        <button onClick={() => navigate("mixolydian")}>
          ミクソリディアンスケール
        </button>
      </div>
      <div>
        <button onClick={() => navigate("minor")}>マイナースケール</button>
      </div>
      <div>
        <button onClick={() => navigate("locrian")}>ロクリアンスケール</button>
      </div>
      <div>
        <button onClick={() => navigate("major_pentatonic")}>
          メジャーペンタトニックスケール
        </button>
      </div>
      <div>
        <button onClick={() => navigate("minor_pentatonic")}>
          マイナーペンタトニックスケール
        </button>
      </div>
    </div>
  );
}
