import { useState } from 'react';
import { CounterContext } from './CounterContext';

export const CounterProvider = ({ children }) => {
  const [numClicks, setNumClicks] = useState(0);
  const increment = amount => { setNumClicks(numClicks + 1); }

  return (
    <CounterContext.Provider value={{numClicks, increment}}>
      {children}
    </CounterContext.Provider>
  )
}
