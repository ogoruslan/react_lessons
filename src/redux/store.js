import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/increment':
      return { ...state, count: state.count + 1 };
    case 'counter/decrement':
      return { ...state, count: state.count - 1 };
    case 'counter/reset':
      return initialState;
    default:
      return state;
  }
}

export const increment = () => ({ type: 'counter/increment' });
export const decrement = () => ({ type: 'counter/decrement' });
export const reset = () => ({ type: 'counter/reset' });

const storeEnhancer = composeWithDevTools();

export const store = createStore(counterReducer, storeEnhancer);
