import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

export const SharedCounterButton = () => {
  const {numClicks, increment} = useContext(CounterContext);

  return (
    <div>
      <p>You have clicked the button {numClicks} times.</p>
      <button onClick={() => increment()} >Increment</button>
    </div>
  );
}