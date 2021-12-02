import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";
export default function Day() {
  //   const day = 2;
  const a = useParams();
  console.log(a);
  const day = a.day;
  const wordList = dummy.words.filter((word) => word.day === Number(day));
  console.log(wordList);

  return (
    <>
      <h2>DAY {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
