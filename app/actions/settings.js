export const SAVE_SETTINGS = 'SAVE_SETTINGS';

export function saveSettingsAction(settings) {
  return {
    type: SAVE_SETTINGS,
    settings: settings
  };
}
