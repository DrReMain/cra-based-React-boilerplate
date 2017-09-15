/**
 * Function
 * @param {state, action}
 * @return {state}
 * */

export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log(`传过来的payload: "${action.payload}"`);
      return state + 1;
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state;
    case 'DECREMENT':
      return state - 1;
    default:
      return state
  }
};
