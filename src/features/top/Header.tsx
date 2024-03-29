import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="horizontal-buttons">
      <div>
        <button onClick={() => navigate("/")}>TOP</button>
      </div>
      <div>
        <button onClick={() => navigate("/scales")}>スケール</button>
      </div>
      <div>
        <button onClick={() => navigate("/guitar")}>ギター</button>
      </div>
    </header>
  );
}
