import { useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  const ref = useRef(null);
  console.log(ref.current);

  const HandlingStart = () => {
    if (ref.current !== null) {
      return;
    }
    ref.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const HandlingStop = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const HandlingReset = () => {
    HandlingStop();
    setTime(0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <h2>{time}</h2>
      <button onClick={HandlingStart}>Start</button>
      <button onClick={HandlingStop}>Stop</button>
      <button onClick={HandlingReset}>Reset</button>
    </div>
  );
}
