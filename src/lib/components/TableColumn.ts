export interface TableColumn {
  prop: string;
  name: string;
  sortOrder?: 'asc' | 'desc';
  minWidth?: string;
  width?: string;
  maxWidth?: string;
}
