import { ItemProps } from 'components/App/App.types';

export interface TodoItemsListProps {
  items: ItemProps[];
  onDeleteItem: (itemId: string) => void;
  onUpdateItem: (editedItem: ItemProps) => void;
  onToggleStatus: (itemId: string) => void;
}
