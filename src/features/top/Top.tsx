import { Link } from "react-router-dom";

export default function Top() {
  return (
    <>
      <h1>トップページ</h1>
      <ul>
        <li>
          <Link to="/scale">スケール</Link>
        </li>
        <li>
          <Link to="/guitar">ギター</Link>
        </li>
      </ul>
    </>
  );
}
