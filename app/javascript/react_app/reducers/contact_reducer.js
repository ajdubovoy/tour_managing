import { LOAD_CONTACT } from '../actions';

export default function contactReducer(state, action) {
  if (state === undefined) {
    // Reducer initialization
    return {}
  }

  switch (action.type) {
    case LOAD_CONTACT:
      return action.payload;
    default:
      return state;
  }
}
