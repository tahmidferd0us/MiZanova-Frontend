import { useId, useRef, useState } from 'react';
import { cn } from '@shared/utils/cn';
import { formatBytes } from '@shared/utils/formatters';
import Button from './Button';
import FormField from './FormField';

const isTypeAllowed = (file, accept) => {
  if (!accept) return true;

  return accept.split(',').map((rule) => rule.trim()).some((rule) =>
    rule.startsWith('.') ? file.name.toLowerCase().endsWith(rule.toLowerCase()) : new RegExp(`^${rule.replace('*', '.*')}$`).test(file.type),
  );
};

const FileUploader = ({
  id,
  label = 'Upload files',
  hint,
  error,
  accept,
  multiple = false,
  maxSizeMb = 10,
  maxFiles = 5,
  value = [],
  onChange,
  disabled = false,
  className,
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [localError, setLocalError] = useState('');

  const handleFiles = (incoming) => {
    const files = Array.from(incoming);
    const oversized = files.find((file) => file.size > maxSizeMb * 1024 * 1024);
    const invalid = files.find((file) => !isTypeAllowed(file, accept));

    if (oversized) return setLocalError(`"${oversized.name}" exceeds the ${maxSizeMb} MB limit`);
    if (invalid) return setLocalError(`"${invalid.name}" is not an accepted file type`);

    setLocalError('');
    onChange?.(multiple ? [...value, ...files].slice(0, maxFiles) : files.slice(0, 1));
  };

  const removeAt = (index) => onChange?.(value.filter((_, itemIndex) => itemIndex !== index));

  return (
    <FormField id={inputId} label={label} hint={hint} error={error || localError} className={className}>
      <div
        onDragOver={(event) => {
          event.preventDefault();
          !disabled && setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          !disabled && handleFiles(event.dataTransfer.files);
        }}
        className={cn(
          'flex flex-col items-center justify-center gap-2 rounded-card border-2 border-dashed border-border-subtle bg-surface-muted/60 px-4 py-8 text-center transition-colors',
          isDragging && 'border-brand-500 bg-brand-50',
          disabled && 'cursor-not-allowed opacity-60',
        )}
      >
        <p className="text-sm font-medium text-content">Drag &amp; drop {multiple ? 'files' : 'a file'} here</p>
        <p className="text-xs text-content-muted">
          {accept ? `${accept} · ` : ''}up to {maxSizeMb} MB{multiple ? ` · max ${maxFiles} files` : ''}
        </p>
        <Button variant="secondary" size="sm" disabled={disabled} onClick={() => inputRef.current?.click()}>
          Browse files
        </Button>
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          className="sr-only"
          onChange={(event) => {
            handleFiles(event.target.files);
            event.target.value = '';
          }}
        />
      </div>

      {value.length > 0 && (
        <ul className="mt-2 flex flex-col gap-2">
          {value.map((file, index) => (
            <li key={`${file.name}-${index}`} className="flex items-center justify-between gap-3 rounded-lg border border-border-subtle bg-surface px-3 py-2">
              <div className="min-w-0">
                <p className="truncate text-sm text-content">{file.name}</p>
                <p className="text-xs text-content-muted">{formatBytes(file.size)}</p>
              </div>
              <Button variant="ghost" size="sm" aria-label={`Remove ${file.name}`} onClick={() => removeAt(index)}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}
    </FormField>
  );
};

export default FileUploader;
