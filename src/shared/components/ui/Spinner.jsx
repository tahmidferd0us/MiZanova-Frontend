import { cn } from '@shared/utils/cn';

const sizes = { sm: 'size-4 border-2', md: 'size-5 border-2', lg: 'size-8 border-[3px]' };

const Spinner = ({ size = 'md', className }) => (
  <span
    role="status"
    aria-label="Loading"
    className={cn('inline-block animate-spin rounded-full border-current border-r-transparent', sizes[size], className)}
  />
);

export default Spinner;
