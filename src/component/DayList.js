import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DayList() {
  const [days, setdays] = useState([]);
  const [count, setcount] = useState(0);

  function onclick() {
    setcount(count + 1);
  }

  function onclick2() {
    setdays([
      ...days,
      {
        id: Math.random(),
        day: 1,
      },
    ]);
  }
  useEffect(() => {
    console.log("저장남는다.");
  }, [count]);
  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day{day.day}</Link>
          </li>
        ))}
      </ul>
      <button onClick={onclick}>{count}</button>
      <button onClick={onclick2}>day change</button>
    </>
  );
}
