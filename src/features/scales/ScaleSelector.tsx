import { useNavigate } from "react-router-dom";

export default function ScaleSelector() {
  const navigate = useNavigate();

  return (
    <div className="horizontal-buttons">
      <div>
        <button onClick={() => navigate("major")}>メジャースケール</button>
      </div>
      <div>
        <button onClick={() => navigate("minor")}>マイナースケール</button>
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
