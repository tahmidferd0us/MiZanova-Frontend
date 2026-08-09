import { forwardRef, useId } from 'react';
import { cn } from '@shared/utils/cn';
import FormField from './FormField';
import { controlClasses } from './Input';

const Textarea = forwardRef(
  ({ id, name, label, error, hint, required, rows = 4, className, wrapperClassName, labelClassName, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? name ?? generatedId;

    return (
      <FormField id={textareaId} label={label} error={error} hint={hint} required={required} className={wrapperClassName} labelClassName={labelClassName}>
        <textarea
          ref={ref}
          id={textareaId}
          name={name}
          rows={rows}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
          className={cn(controlClasses, 'resize-y py-2.5', error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20', className)}
          {...props}
        />
      </FormField>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
