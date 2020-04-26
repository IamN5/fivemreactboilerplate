import { createStore } from "redux";

const INITIAL_STATE = {
  show: false,
}

function visibility(state = INITIAL_STATE, action) {
  let data = action.data;
  switch(action.type) {
    case 'SHOW_UI':
      return {...state, show: true};
    case 'HIDE_UI':
      return {...state, show: false};
    default:
      return state;
  }
}

const store = createStore(visibility);

export default store;
