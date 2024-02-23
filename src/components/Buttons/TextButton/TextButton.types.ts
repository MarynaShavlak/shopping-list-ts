export interface CommonTextBtnProps {
  size?: 'big' | 'little';
}

export interface TextButtonProps extends CommonTextBtnProps {
  label: string;
  onClick?: () => void;
  type: 'button' | 'submit';
}
