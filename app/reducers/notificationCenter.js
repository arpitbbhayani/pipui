// @flow
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/notificationCenter';

export default function notificationCenter(state: Array = [], action: Object) {

  switch (action.type) {
    case ADD_NOTIFICATION:
      return state.concat([action.message]);
    case REMOVE_NOTIFICATION:
      return state.filter(notification => notification.id != action.messageId);
    default:
      return state;
  }
}
