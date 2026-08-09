import { forwardRef, useId } from 'react';
import { cn } from '@shared/utils/cn';
import FormField from './FormField';
import { controlClasses } from './Input';

const Select = forwardRef(
  (
    { id, name, label, error, hint, required, options = [], placeholder = 'Select an option', className, wrapperClassName, labelClassName, ...props },
    ref,
  ) => {
    const generatedId = useId();
    const selectId = id ?? name ?? generatedId;

    return (
      <FormField id={selectId} label={label} error={error} hint={hint} required={required} className={wrapperClassName} labelClassName={labelClassName}>
        <select
          ref={ref}
          id={selectId}
          name={name}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined}
          className={cn(controlClasses, 'h-11 cursor-pointer pr-9', error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20', className)}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map(({ value, label: optionLabel, disabled }) => (
            <option key={value} value={value} disabled={disabled}>
              {optionLabel}
            </option>
          ))}
        </select>
      </FormField>
    );
  },
);

Select.displayName = 'Select';

export default Select;
