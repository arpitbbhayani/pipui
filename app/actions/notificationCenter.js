export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export function addNotificationAction(message) {
  return {
    type: ADD_NOTIFICATION,
    message: message
  };
}

export function removeNotificationAction(messageId) {
  return {
    type: REMOVE_NOTIFICATION,
    messageId: messageId
  };
}
