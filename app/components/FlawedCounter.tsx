import React, { useEffect, useState } from "react";


export const Counter: React.FC<{ initial?: number }> = (props) => {
  const [count, setCount] = useState(props.initial || 0);

  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    setCount(count + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const result = (() => {
    let total = 0;
    for (let i = 0; i < 500000; i++) {
      total += Math.sqrt(i * Math.random());
    }
    return total + count;
  })();

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setLastUpdated(new Date());
  };

  const reset = () => {
    setCount(props.initial || 0);
  };

  return (
    <div style={{ border: "1px solid red", padding: 12, marginTop: 16 }}>
      <h2>Counter</h2>
      <p>Current count: {count}</p>
      <p>Result: {result}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={reset} style={{ marginLeft: 8 }}>
        Reset
      </button>
    </div>
  );
};

