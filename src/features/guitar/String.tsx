import { useRecoilValue } from "recoil";
import { languageStore } from "@/features/guitar/Language";

interface Props {
  stringNo: string;
  scale: {
    [index: string]: {
      [key: string]: string | number;
      id: number;
      frequency: number;
      ja: string;
      en: string;
    };
  };
  sound: (frequency: number[]) => () => void;
}

export default function String({ stringNo, scale, sound }: Props) {
  const language = useRecoilValue(languageStore);
  const key = `strings-${stringNo}`;

  return (
    <div key={key} className="string">
      <div>{stringNo}弦</div>
      {Object.values(scale).map(fret => {
        const key = `strings-${stringNo}-flet-${fret.id}`;
        return (
          <div key={key} className="fret">
            <button onClick={sound([fret.frequency])}>{fret[language]}</button>
          </div>
        );
      })}
    </div>
  );
}
