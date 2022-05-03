interface Props {
  language: string;
  japanese: () => void;
  english: () => void;
}

export default function Language(props: Props) {
  const { language, japanese, english } = props;

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
