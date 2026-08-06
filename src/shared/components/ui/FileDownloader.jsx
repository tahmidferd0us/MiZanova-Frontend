import { useState } from 'react';
import { axiosClient } from '@app/api/axiosClient';
import { useToast } from '@shared/hooks/useToast';
import { downloadBlob, fileNameFromHeaders } from '@shared/utils/file';
import Button from './Button';

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
      downloadBlob(response.data, fileNameFromHeaders(response.headers, fileName));
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
