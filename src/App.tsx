import { useState } from "react";
import Language from "@/features/Language";
import Fingerboard from "@/features/Fingerboard";
import Chord from "@/features/Chord";
import "@/assets/style.scss";

export const useSwitchLanguage = () => {
  const [language, setLanguage] = useState("ja");
  const japanese = () => setLanguage("ja");
  const english = () => setLanguage("en");
  return { language, japanese, english };
};

export default function App() {
  const { language, japanese, english } = useSwitchLanguage();

  return (
    <>
      <Language {...{ language, japanese, english }} />
      <Fingerboard {...{ language }} />
      <Chord />
    </>
  );
}
