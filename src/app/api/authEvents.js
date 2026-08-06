const UNAUTHORIZED = 'mz:unauthorized';

export const emitUnauthorized = () => window.dispatchEvent(new CustomEvent(UNAUTHORIZED));

export const onUnauthorized = (handler) => {
  window.addEventListener(UNAUTHORIZED, handler);
  return () => window.removeEventListener(UNAUTHORIZED, handler);
};
