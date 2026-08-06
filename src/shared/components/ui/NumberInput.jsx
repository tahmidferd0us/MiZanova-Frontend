import { forwardRef } from 'react';
import Input from './Input';

const NumberInput = forwardRef(({ min, max, step = 1, suffix, ...props }, ref) => (
  <Input
    ref={ref}
    type="number"
    inputMode="decimal"
    min={min}
    max={max}
    step={step}
    rightSlot={suffix && <span className="text-sm">{suffix}</span>}
    className="[appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
    {...props}
  />
));

NumberInput.displayName = 'NumberInput';

export default NumberInput;
