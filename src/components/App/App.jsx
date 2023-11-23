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

export function App() {
  const [items, setItems] = useLocalStorage('items', []);

  const addItem = item => {
    if (checkItemInList(item)) return;

    const itemWithId = {
      id: nanoid(),
      ...item,
    };

    setItems([itemWithId, ...items]);
  };

  const checkItemInList = ({ title }) => {
    const isNameExist = items.some(el => el.title === title);
    if (isNameExist) {
      toast.error(
        `Oops, todo item with name ${title} is already in your todo list`
      );
    }
    return isNameExist;
  };

  const deleteItem = itemId => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const hasItemsInList = items.length !== 0;

  return (
    <Layout>
      <Container>
        <Section title="Shoping List">
          <TodoForm onSubmit={addItem} />
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
}
