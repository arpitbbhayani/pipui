export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

export function addNotificationAction(message) {
  return {
    type: ADD_NOTIFICATION,
    message: message
  };
}
