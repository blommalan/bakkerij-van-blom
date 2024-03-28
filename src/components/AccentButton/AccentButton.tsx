import { ReactNode } from 'react';
import styles from './AccentButton.module.css';

interface AccentButtonProps {
  color: 'clear' | 'brown';
  children: ReactNode;
}

const AccentButton = ({ children, color = 'clear' }: AccentButtonProps) => {
  return (
    <button className='accentButton' type='button'>
      {children}
    </button>
  );
};

export default AccentButton;
