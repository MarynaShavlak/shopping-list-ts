import React, { FC } from 'react';
import { NotificationMessage } from './Notification.styled';
import { NotificationProps } from './Notification.types';

export const Notification: FC<NotificationProps> = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};
