import { useState } from 'react';
import { axiosClient } from '@app/api/axiosClient';
import { useToast } from '@shared/hooks/useToast';
import Button from './Button';

export const downloadBlob = (blob, fileName) => {
  const url = URL.createObjectURL(blob);
  const link = Object.assign(document.createElement('a'), { href: url, download: fileName });

  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

const nameFromHeaders = (headers, fallback) =>
  headers?.['content-disposition']?.match(/filename\*?=(?:UTF-8'')?"?([^";]+)"?/i)?.[1] ?? fallback;

const FileDownloader = ({
  url,
  fileName = 'download',
  params,
  label = 'Download',
  variant = 'secondary',
  size = 'md',
  onDownloaded,
  className,
  children,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const toast = useToast();

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      const response = await axiosClient({ url, method: 'GET', params, responseType: 'blob' });
      downloadBlob(response.data, decodeURIComponent(nameFromHeaders(response.headers, fileName)));
      onDownloaded?.();
    } catch (error) {
      toast.error('Download failed', { description: error.response?.data?.message ?? error.message });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button variant={variant} size={size} isLoading={isDownloading} onClick={handleDownload} className={className}>
      {children ?? label}
    </Button>
  );
};

export default FileDownloader;
