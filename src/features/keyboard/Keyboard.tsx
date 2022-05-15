import { usePianoScale } from "@/features/keyboard/hooks";

export default function Keyboard() {
  const { scale } = usePianoScale();

  return (
    <table className="keyboard">
      <tbody>
        <tr>
          <td colSpan={4} className="back white-key"></td>
          <td colSpan={4} className="back black-key">
            {scale[1].en}
          </td>
          <td colSpan={2} className="back white-key"></td>
          <td colSpan={4} className="back black-key">
            {scale[3].en}
          </td>
          <td colSpan={4} className="back white-key"></td>
          <td colSpan={3} className="back white-key"></td>
          <td colSpan={4} className="back black-key">
            {scale[6].en}
          </td>
          <td colSpan={3} className="back white-key"></td>
          <td colSpan={4} className="back black-key">
            {scale[8].en}
          </td>
          <td colSpan={3} className="back white-key"></td>
          <td colSpan={4} className="back black-key">
            {scale[10].en}
          </td>
          <td colSpan={3} className="back white-key"></td>
          <td colSpan={4} className="back white-key"></td>
          <td colSpan={4} className="back black-key">
            {scale[13].en}
          </td>
          <td colSpan={2} className="back white-key"></td>
          <td colSpan={4} className="back black-key">
            {scale[15].en}
          </td>
          <td colSpan={4} className="back white-key"></td>
          <td colSpan={3} className="back white-key"></td>
          <td colSpan={4} className="back black-key">
            {scale[18].en}
          </td>
          <td colSpan={3} className="back white-key"></td>
          <td colSpan={4} className="back black-key">
            {scale[20].en}
          </td>
          <td colSpan={3} className="back white-key"></td>
          <td colSpan={4} className="back black-key">
            {scale[22].en}
          </td>
          <td colSpan={3} className="back white-key"></td>
        </tr>
        <tr>
          <td colSpan={6} className="front white-key">
            {scale[0].en}
          </td>
          <td colSpan={6} className="front white-key">
            {scale[2].en}
          </td>
          <td colSpan={6} className="front white-key">
            {scale[4].en}
          </td>
          <td colSpan={6} className="front white-key">
            {scale[5].en}
          </td>
          <td colSpan={6} className="front white-key">
            {scale[7].en}
          </td>
          <td colSpan={6} className="front white-key">
            {scale[9].en}
          </td>
          <td colSpan={6} className="front white-key">
            {scale[11].en}
          </td>
          <td colSpan={6} className="front white-key">
            {scale[12].en}
          </td>
          <td colSpan={6} className="front white-key">
            {scale[14].en}
          </td>
          <td colSpan={6} className="front white-key">
            {scale[16].en}
          </td>
          <td colSpan={6} className="front white-key">
            {scale[17].en}
          </td>
          <td colSpan={6} className="front white-key">
            {scale[19].en}
          </td>
          <td colSpan={6} className="front white-key">
            {scale[21].en}
          </td>
          <td colSpan={6} className="front white-key">
            {scale[23].en}
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
