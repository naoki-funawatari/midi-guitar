import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/features/top/Header";
import Top from "@/features/top/Top";
import Scale from "@/features/scales/Scales";
import Guitar from "@/features/guitar/Guitar";
import MajorScale from "@/features/scales/MajorScale";
import MinorScale from "@/features/scales/MinorScale";
import MajorPentatonicScale from "@/features/scales/MajorPentatonicScale";
import MinorPentatonicScale from "@/features/scales/MinorPentatonicScale";
import "@/assets/styles/style.scss";

export default function App() {
  return (
    <RecoilRoot>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Top />} />
          <Route path="scales" element={<Scale />}>
            <Route index element={<></>} />
            <Route path="major" element={<MajorScale />} />
            <Route path="minor" element={<MinorScale />} />
            <Route path="major_pentatonic" element={<MajorPentatonicScale />} />
            <Route path="minor_pentatonic" element={<MinorPentatonicScale />} />
          </Route>
          <Route path="guitar" element={<Guitar />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}
