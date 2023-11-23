import React from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { Section } from 'components/Section';
import { TodoForm } from 'components/TodoForm';
import { ItemsList } from 'components/ItemsList';
import { Notification } from 'components/Notification';
import { ToastContainer, toast } from 'react-toastify';
import { Layout } from 'components/Layout';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const App = () => {
  const [items, setItems] = useLocalStorage('items', []);

  const addItem = item => {
    let isExist = checkItemInList(item);
    if (isExist) {
      return;
    }

    const itemWithId = {
      id: nanoid(),
      ...item,
    };

    setItems([itemWithId, ...items]);
    return (isExist = true);
  };

  const checkItemInList = item => {
    const isNameExist = items.some(el => el.title === item.title);
    if (isNameExist) {
      toast.error(
        `Oops, todo item with name ${item.title} is already in your todo list`
      );
      return true;
    }
    return false;
  };

  const deleteItem = itemId => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const hasItemsInList = items.length !== 0;

  return (
    <Layout>
      <Container>
        <Section title="Shoping List">
          <TodoForm onSubmit={addItem} operationType="Add" />
        </Section>
        <Section>
          {hasItemsInList ? (
            <>
              <ItemsList items={items} onDeleteItem={deleteItem}></ItemsList>
            </>
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
