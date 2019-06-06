import { LOAD_CONTACTS } from '../actions';

export default function ContactsReducer(state, action) {
  if (state === undefined) {
    // Reducer initialization
    return [];
  }

  switch (action.type) {
    case LOAD_CONTACTS:
      return action.payload;
    default:
      return state;
  }
}
