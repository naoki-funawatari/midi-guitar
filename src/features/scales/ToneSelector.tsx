import { atom, useRecoilState } from "recoil";
import tones from "@/assets/scale/tones";
import React from "react";

export const toneSelectorStore = atom({
  key: "toneSelectorStore",
  default: {
    default: 28,
    current: 28,
  },
});

export default function ToneSelector() {
  const [root, setRoot] = useRecoilState(toneSelectorStore);
  const values = tones
    .map(o => [o.id, o.ja, o.en])
    .slice(root.default - 1, root.default + 11);
  const handleChanged = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRoot(prev => ({ ...prev, current: Number(e.currentTarget.value) }));
  };

  return (
    <div className="tone-selector">
      {values.map(o => (
        <button key={o[0]} value={o[0]} onClick={handleChanged}>
          {o[1]}
          <br />
          {o[2]}
        </button>
      ))}
    </div>
  );
}
