export const CONFIG_INITIALIZED = 'CONFIG_INITIALIZED';

export const configInitialized = (config) => ({
  type: CONFIG_INITIALIZED,
  payload: config,
});
