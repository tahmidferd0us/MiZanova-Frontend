import { createPortal } from 'react-dom';
import { AnimatePresence } from 'motion/react';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { selectToasts, toastDismissed } from '@shared/store/uiSlice';
import Toast from './Toast';

const ToastContainer = () => {
  const toasts = useAppSelector(selectToasts);
  const dispatch = useAppDispatch();

  return createPortal(
    <div className="pointer-events-none fixed inset-x-4 top-4 z-[60] flex flex-col items-center gap-2 sm:inset-x-auto sm:right-6 sm:top-6 sm:items-end">
      <AnimatePresence initial={false}>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onDismiss={(id) => dispatch(toastDismissed(id))} />
        ))}
      </AnimatePresence>
    </div>,
    document.body,
  );
};

export default ToastContainer;
