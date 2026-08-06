export const getErrorMessage = (error, fallback = 'Something went wrong. Please try again.') =>
  error?.message ?? error?.data?.message ?? fallback;

export const applyFieldErrors = (error, setError) => {
  const details = error?.details;
  if (!details || typeof details !== 'object') return false;

  const entries = Object.entries(details).filter(([, messages]) => Array.isArray(messages) && messages.length);
  entries.forEach(([field, messages]) => setError(field, { type: 'server', message: messages[0] }));

  return entries.length > 0;
};
