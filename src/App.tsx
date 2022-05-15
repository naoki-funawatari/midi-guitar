import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/features/top/Header";
import Top from "@/features/top/Top";
import Scale from "@/features/scales/Scales";
import Guitar from "@/features/guitar/Guitar";
import "@/assets/styles/style.scss";

export default function App() {
  return (
    <RecoilRoot>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Top />} />
          <Route path="scales" element={<Scale />} />
          <Route path="guitar" element={<Guitar />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}
