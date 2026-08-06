const ACCESS_TOKEN_KEY = 'mz.accessToken';

const safeGet = (key) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeSet = (key, value) => {
  try {
    value === null ? window.localStorage.removeItem(key) : window.localStorage.setItem(key, value);
  } catch {
    /* storage unavailable (private mode / SSR) */
  }
};

export const tokenStorage = {
  get: () => safeGet(ACCESS_TOKEN_KEY),
  set: (token) => safeSet(ACCESS_TOKEN_KEY, token),
  clear: () => safeSet(ACCESS_TOKEN_KEY, null),
};
