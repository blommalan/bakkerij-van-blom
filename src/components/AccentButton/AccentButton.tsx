import { ReactNode } from 'react';
import styles from './AccentButton.module.css';

interface AccentButtonProps {
  color: 'blue' | 'brown';
  children: ReactNode;
}

const AccentButton = ({ children, color = 'blue' }: AccentButtonProps) => {
  return (
    <button
      className={`${styles.accentButton} ${
        color === 'blue' ? '-blue' : '-brown'
      }`}
      type='button'
    >
      {children}
    </button>
  );
};

export default AccentButton;
