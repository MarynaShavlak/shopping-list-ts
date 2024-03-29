import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container } from './App.styled';
import { Section } from 'components/Section';
import { AddTodoForm } from 'components/Forms/AddTodoForm';
import { TodoItemsList } from 'components/TodoItemsList';
import { Notification } from 'components/Notification';
import { ToastContainer, toast } from 'react-toastify';
import { Layout } from 'components/Layout';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { ItemProps, Unit } from './App.types';
import { Canvas } from 'components/Canvas';

export const App = () => {
  const [items, setItems] = useLocalStorage<ItemProps[]>('items', []);

  const addItem = (item: Partial<ItemProps>) => {
    if (checkItemInList(item)) return;

    const itemWithId = {
      id: uuidv4(),
      title: item.title || '',
      quantity: item.quantity || '',
      status: false,
      unit: item.unit as Unit,
    };
    setItems([itemWithId, ...items]);
  };

  const checkItemInList = (item: Partial<ItemProps>): boolean => {
    const filteredItems = items.filter(el => el.id !== item.id);
    const isNameExist = filteredItems.some(el => el.title === item.title);
    const isQuantityExist = filteredItems.some(
      el => el.quantity === item.quantity
    );
    const isExist = isNameExist && isQuantityExist;
    if (isNameExist && isQuantityExist) {
      toast.error(
        `Oops, the same item is already in your shopping list. Please use another data`
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
    <>
      <Canvas />
      <Layout>
        <Container className="app">
          <Section title="Shopping List">
            <AddTodoForm
              onSubmit={(item: Partial<ItemProps>) => addItem(item)}
            />
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
              <Notification message="There are no items in your shopping list yet" />
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
    </>
  );
};
