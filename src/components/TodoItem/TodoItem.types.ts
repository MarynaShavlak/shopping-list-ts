import { ItemProps } from 'components/App/App.types';

export interface TodoItemProps {
  item: ItemProps;
  onDeleteItem: (itemId: string) => void;
  onUpdateItem: (updatedItem: ItemProps) => void;
  onToggleStatus: (itemId: string) => void;
}

export interface InputProps {
  status: boolean;
}
