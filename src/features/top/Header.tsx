import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div>
        <button onClick={() => navigate("/")}>TOP</button>
      </div>
      <div>
        <button onClick={() => navigate("/scale")}>スケール</button>
      </div>
      <div>
        <button onClick={() => navigate("/guitar")}>ギター</button>
      </div>
    </header>
  );
}
