import { cn } from '@shared/utils/cn';

const FormField = ({ id, label, error, hint, required = false, className, children }) => (
  <div className={cn('flex w-full flex-col gap-1.5', className)}>
    {label && (
      <label htmlFor={id} className="text-sm font-medium text-content">
        {label}
        {required && <span className="ml-0.5 text-red-600">*</span>}
      </label>
    )}
    {children}
    {error ? (
      <p id={`${id}-error`} role="alert" className="text-sm text-red-600">
        {error}
      </p>
    ) : (
      hint && (
        <p id={`${id}-hint`} className="text-sm text-content-muted">
          {hint}
        </p>
      )
    )}
  </div>
);

export default FormField;
