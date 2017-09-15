/**
 * Function
 * @param {state, action}
 * @return {state}
 * */

const initialState = {
  data: 'default'
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'FETCH':

      if (action.payload.success) {
        return {
          ...state,
          data: action.payload
        };
      } else {
        return {
          ...state,
          data: '请求失败'
        }
      }

    case 'CLEAN':
      return initialState
    default:
      return state
  }
};
