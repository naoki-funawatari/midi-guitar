interface Props {
  stringNo: string;
  scale: {
    [index: string]: {
      id: number;
      frequency: number;
      ja: string;
      en: string;
    };
  };
  sound: (frequency: number[]) => () => void;
}

export default function String(props: Props) {
  const { stringNo, scale, sound } = props;
  const key = `strings-${stringNo}`;

  return (
    <div key={key} className="string">
      <div>{stringNo}弦</div>
      {Object.values(scale).map(fret => {
        const key = `strings-${stringNo}-flet-${scale.id}`;
        return (
          <div key={key} className="fret">
            <button onClick={sound([fret.frequency])}>{fret.ja}</button>
          </div>
        );
      })}
    </div>
  );
}
