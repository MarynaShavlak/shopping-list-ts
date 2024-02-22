import React from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { Section } from 'components/Section';
import { AddTodoForm } from 'components/Forms/AddTodoForm';
import { TodoItemsList } from 'components/TodoItemsList';
import { Notification } from 'components/Notification';
import { ToastContainer, toast } from 'react-toastify';
import { Layout } from 'components/Layout';
import { useLocalStorage } from 'hooks/useLocalStorage';

export interface ItemProps {
  id: string;
  title: string;
  priority: string;
  status: boolean;
}

export const App = () => {
  const [items, setItems] = useLocalStorage<ItemProps[]>('items', []);

  const addItem = (item: Partial<ItemProps>) => {
    if (checkItemInList(item)) return;

    const itemWithId = {
      id: nanoid(),
      title: item.title || '',
      priority: item.priority || '',
      status: false,
    };
    setItems([itemWithId, ...items]);
  };

  const checkItemInList = (item: Partial<ItemProps>): boolean => {
    const filteredItems = items.filter(el => el.id !== item.id);
    const isNameExist = filteredItems.some(el => el.title === item.title);
    const isPriorityExist = filteredItems.some(
      el => el.priority === item.priority
    );
    const isExist = isNameExist && isPriorityExist;
    if (isNameExist && isPriorityExist) {
      toast.error(
        `Oops, the same todo item is already in your todo list. Please use another data`
      );
    }
    return isExist;
  };

  const deleteItem = (itemId: string) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const toggleStatus = (itemId: string) => {
    setItems(
      items.map(item =>
        item.id === itemId ? { ...item, status: !item.status } : item
      )
    );
  };

  const editItem = (editedItem: Partial<ItemProps>) => {
    if (checkItemInList(editedItem)) return;
    setItems(
      items.map(item =>
        item.id === editedItem.id ? { ...item, ...editedItem } : item
      )
    );
  };

  const hasItemsInList = items.length !== 0;

  return (
    <Layout>
      <Container>
        <Section title="Shopping List">
          <AddTodoForm onSubmit={(item: Partial<ItemProps>) => addItem(item)} />
        </Section>
        <Section>
          {hasItemsInList ? (
            <TodoItemsList
              items={items}
              onDeleteItem={deleteItem}
              onUpdateItem={editItem}
              onToggleStatus={toggleStatus}
            ></TodoItemsList>
          ) : (
            <Notification message="There are no items in your todo list yet" />
          )}
        </Section>
        <ToastContainer
          position="top-right"
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover={false}
          theme="colored"
          autoClose={4000}
        />
      </Container>
    </Layout>
  );
};
