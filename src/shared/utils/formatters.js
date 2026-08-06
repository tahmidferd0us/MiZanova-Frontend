export const formatBytes = (bytes, decimals = 1) => {
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${parseFloat((bytes / 1024 ** index).toFixed(decimals))} ${units[index]}`;
};

export const formatDate = (value, options = { dateStyle: 'medium' }) =>
  value ? new Intl.DateTimeFormat('en-US', options).format(new Date(value)) : '—';

export const formatDateTime = (value) => formatDate(value, { dateStyle: 'medium', timeStyle: 'short' });

export const formatNumber = (value, options = {}) => new Intl.NumberFormat('en-US', options).format(value ?? 0);

export const formatCurrency = (value, currency = 'USD') => formatNumber(value, { style: 'currency', currency });

export const truncate = (text = '', max = 60) => (text.length > max ? `${text.slice(0, max)}…` : text);
