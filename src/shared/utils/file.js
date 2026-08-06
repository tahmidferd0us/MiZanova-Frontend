export const downloadBlob = (blob, fileName) => {
  const url = URL.createObjectURL(blob);
  const link = Object.assign(document.createElement('a'), { href: url, download: fileName });

  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

export const fileNameFromHeaders = (headers, fallback) =>
  decodeURIComponent(headers?.['content-disposition']?.match(/filename\*?=(?:UTF-8'')?"?([^";]+)"?/i)?.[1] ?? fallback);
