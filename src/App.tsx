import { RecoilRoot } from "recoil";
import Guitar from "@/features/guitar/Guitar";
import "@/assets/styles/style.scss";

export default function App() {
  return (
    <RecoilRoot>
      <Guitar />
    </RecoilRoot>
  );
}
