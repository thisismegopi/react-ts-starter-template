import { PaginationState } from '@tanstack/react-table';
import { useState } from 'react';

export function usePagination(initialSize = 1) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageSize: initialSize,
    pageIndex: 0,
  });
  const { pageSize, pageIndex } = pagination;

  return {
    // table state
    onPaginationChange: setPagination,
    pagination,
    // API
    limit: pageSize,
    skip: pageSize * pageIndex,
  };
}
