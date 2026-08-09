import { forwardRef, useId, useState } from 'react';
import { cn } from '@shared/utils/cn';
import { EyeIcon, EyeOffIcon } from '@shared/components/icons';
import FormField from './FormField';

export const controlClasses =
  'w-full rounded-lg border border-border-subtle bg-surface px-3 text-sm text-content transition-colors placeholder:text-content-muted/70 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-70';

const Input = forwardRef(
  (
    { id, name, type = 'text', label, error, hint, required, leftIcon, rightSlot, className, wrapperClassName, labelClassName, ...props },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? name ?? generatedId;
    const [isRevealed, setIsRevealed] = useState(false);
    const isPassword = type === 'password';
    const resolvedType = isPassword && isRevealed ? 'text' : type;

    return (
      <FormField id={inputId} label={label} error={error} hint={hint} required={required} className={wrapperClassName} labelClassName={labelClassName}>
        <div className="relative flex items-center">
          {leftIcon && <span className="pointer-events-none absolute left-3 text-content-muted">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={resolvedType}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            className={cn(
              controlClasses,
              'h-11',
              leftIcon && 'pl-10',
              (isPassword || rightSlot) && 'pr-11',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              className,
            )}
            {...props}
          />
          {isPassword ? (
            <button
              type="button"
              onClick={() => setIsRevealed((value) => !value)}
              aria-label={isRevealed ? 'Hide password' : 'Show password'}
              className="absolute right-2 rounded-md p-1.5 text-content-muted transition-colors hover:text-brand-600"
            >
              {isRevealed ? <EyeOffIcon className="size-5" /> : <EyeIcon className="size-5" />}
            </button>
          ) : (
            rightSlot && <span className="absolute right-3 text-content-muted">{rightSlot}</span>
          )}
        </div>
      </FormField>
    );
  },
);

Input.displayName = 'Input';

export default Input;
