import { SortingState } from '@tanstack/react-table';
import { useState } from 'react';

export const useSorting = (initialState: SortingState) => {
  const [sorting, setSorting] = useState<SortingState>(initialState);
  return {
    onSortingChange: setSorting,
    sorting,
  };
};
