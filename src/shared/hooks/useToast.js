import { useMemo } from 'react';
import { useAppDispatch } from '@app/store/hooks';
import { toastDismissed, toastPushed, toastsCleared } from '@shared/store/uiSlice';

export const useToast = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => {
    const push = (variant) => (title, options = {}) => dispatch(toastPushed({ title, variant, ...options }));

    return {
      success: push('success'),
      error: push('error'),
      warning: push('warning'),
      info: push('info'),
      dismiss: (id) => dispatch(toastDismissed(id)),
      clear: () => dispatch(toastsCleared()),
    };
  }, [dispatch]);
};
