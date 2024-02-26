import { ItemProps, Unit } from 'components/App/App.types';

export interface EditTodoFormProps {
  item: ItemProps;
  onSave: (updatedItem: ItemProps) => void;
  onCancel: () => void;
}

export interface EditTodoFormData {
  title: string;
  quantity: string;
  unit: Unit;
}
