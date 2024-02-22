import { ItemProps } from 'components/App/App.types';

export interface EditTodoFormProps {
  item: ItemProps;
  onSave: (updatedItem: ItemProps) => void;
  onCancel: () => void;
}

export interface EditTodoFormData {
  title: string;
  priority: string;
}
