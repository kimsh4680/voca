import { useState } from "react";

export default function Word({ word }) {
  const [isShow, setisShow] = useState(false);
  const [isDone, setisDone] = useState(word.isDone);

  function toggleDone() {
    setisDone(!isDone);
  }

  function toggleShow() {
    setisShow(!isShow);
  }
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td> <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>
          {!isShow ? "뜻 보기" : "뜻 숨기기"}
        </button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}
