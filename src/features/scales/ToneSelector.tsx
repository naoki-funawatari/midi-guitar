import { atom, useRecoilState } from "recoil";
import tones from "@/assets/scale/tones";
import React from "react";

const values = tones.map(o => [o.id, `${o.ja} / ${o.en}`]);
export const toneSelectorStore = atom({
  key: "toneSelectorStore",
  default: 28,
});

export default function ToneSelector() {
  const [root, setRoot] = useRecoilState(toneSelectorStore);
  const handleChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoot(Number(e.target.value));
  };

  return (
    <div className="tone-selector">
      <select value={root} onChange={handleChanged}>
        {values.map(o => (
          <option key={o[0]} value={o[0]}>
            {o[1]}
          </option>
        ))}
      </select>
    </div>
  );
}
