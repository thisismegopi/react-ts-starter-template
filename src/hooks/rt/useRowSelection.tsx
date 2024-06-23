import { RowSelectionState } from '@tanstack/react-table';
import React from 'react';

export function useRowSelection() {
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  return { rowSelection, onRowSelectionChange: setRowSelection };
}
