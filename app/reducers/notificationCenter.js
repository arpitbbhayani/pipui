// @flow
import { ADD_NOTIFICATION } from '../actions/notificationCenter';

export default function notificationCenter(state: Array = [], action: Object) {

  switch (action.type) {
    case ADD_NOTIFICATION:
      return state.concat(action.message);
    default:
      return state;
  }
}
