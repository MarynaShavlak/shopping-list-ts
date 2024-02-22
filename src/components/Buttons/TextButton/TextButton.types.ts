export interface TextButtonProps {
  label: string;
  onClick?: () => void;
  type: 'button' | 'submit';
  size?: 'big' | 'little';
}
