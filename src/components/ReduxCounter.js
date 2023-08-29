import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNumberOfClicks } from '../selectors';
import { counterButtonClicked } from '../actions';

export const ReduxCounter = () => {
  const count = useSelector(getNumberOfClicks);
  const dispatch = useDispatch();
  const [incrementBy, setIncrementBy] = useState(1);

 //console.dir({'src': 'ReduxCounter', 'count': count, 'getter': getNumberOfClicks, 'sel': useSelector});
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
        onClick={() => dispatch(counterButtonClicked)}
      >Increment</button>
    </>
  );
}