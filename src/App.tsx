import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "@/features/top/Top";
import Guitar from "@/features/guitar/Guitar";
import "@/assets/styles/style.scss";

export default function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route index element={<Top />} />
          <Route path="guitar" element={<Guitar />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}
