import { NotificationMessage } from './Notification.styled';

interface NotificationProps {
  message: string;
}

export const Notification = ({ message }: NotificationProps) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};
