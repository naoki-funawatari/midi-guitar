import { RecoilRoot } from "recoil";
import Language from "@/features/Language";
import Fingerboard from "@/features/Fingerboard";
import Chord from "@/features/Chord";
import "@/assets/style.scss";

export default function App() {
  return (
    <RecoilRoot>
      <Language />
      <Fingerboard />
      <Chord />
    </RecoilRoot>
  );
}
