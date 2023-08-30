import React, { useState } from 'react';

export const CounterButton = () => {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <>
      <p>You have clicked the button {count} times.</p>
      <label>
        Increment By:
        <input
          value={incrementBy}
          onChange={e => setIncrementBy(Number(e.target.value))}
          type="number" />
      </label>
      <button
        onClick={() => setCount(count + incrementBy)}
      >Increment</button>
    </>
  );
}