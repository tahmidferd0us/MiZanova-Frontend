import { useMemo, useState } from 'react';

export const usePagination = ({ initialPage = 1, initialLimit = 10, total = 0 } = {}) => {
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);

  const onLimitChange = (next) => {
    setLimit(next);
    setPage(1);
  };

  return useMemo(
    () => ({ page, limit, total, onPageChange: setPage, onLimitChange, params: { page, limit } }),
    [page, limit, total],
  );
};
