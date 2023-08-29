import { createStore, combineReducers } from 'redux';
import { numberOfClicksReducer } from './reducers';

const rootReducer = combineReducers({
  // map names to their reducer {key: reducer}
  numClicks: numberOfClicksReducer,
});

export const store = createStore(rootReducer);
