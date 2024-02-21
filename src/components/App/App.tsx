import React from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { Section } from 'components/Section';
import { TodoForm } from 'components/TodoForm';
import { TodoItemsList } from 'components/TodoItemsList';
import { Notification } from 'components/Notification';
import { ToastContainer, toast } from 'react-toastify';
import { Layout } from 'components/Layout';
import { useLocalStorage } from 'hooks/useLocalStorage';

export interface ItemProps {
  id: string;
  title: string;
  priority: string;
}

export const App = () => {
  const [items, setItems] = useLocalStorage<ItemProps[]>('items', []);

  const addItem = (item: Partial<ItemProps>) => {
    if (checkItemInList(item)) return;

    const itemWithId = {
      id: nanoid(),
      title: item.title || '',
      priority: item.priority || '',
    };
    setItems([itemWithId, ...items]);
  };

  const checkItemInList = (item: Partial<ItemProps>): boolean => {
    const isNameExist = items.some(el => el.title === item.title);
    if (isNameExist) {
      toast.error(
        `Oops, todo item with name ${item.title} is already in your todo list`
      );
    }
    return isNameExist;
  };

  const deleteItem = (itemId: string) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const hasItemsInList = items.length !== 0;

  return (
    <Layout>
      <Container>
        <Section title="Shopping List">
          <TodoForm onSubmit={(item: Partial<ItemProps>) => addItem(item)} />
        </Section>
        <Section>
          {hasItemsInList ? (
            <TodoItemsList
              items={items}
              onDeleteItem={deleteItem}
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
