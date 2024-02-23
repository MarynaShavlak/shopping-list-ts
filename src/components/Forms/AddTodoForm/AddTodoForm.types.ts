import { ItemProps } from 'components/App/App.types';

export interface AddTodoFormProps {
  onSubmit: (item: Partial<ItemProps>) => void;
}

export interface AddTodoFormData {
  title: string;
  quantity: string;
}
