import { atom, useRecoilState } from "recoil";

export const languageStore = atom({ key: "languageStore", default: "ja" });

const useSwitchLanguage = () => {
  const [language, setLanguage] = useRecoilState(languageStore);
  const japanese = () => setLanguage("ja");
  const english = () => setLanguage("en");
  return { language, japanese, english };
};

export default function Language() {
  const { language, japanese, english } = useSwitchLanguage();

  return (
    <div className="language">
      <label>
        <input type="radio" checked={language === "ja"} onChange={japanese} />
        japanese
      </label>
      <label>
        <input type="radio" checked={language === "en"} onChange={english} />
        english
      </label>
    </div>
  );
}
