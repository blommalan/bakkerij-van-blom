import { ReactNode } from 'react';
import styles from './IconButton.module.css'

interface IconButtonProps {
    children: ReactNode; //Children should be the icon
}

const IconButton = ({ children }: IconButtonProps) => {
    return (
        <button className={styles.iconButton}>
            {children}
        </button>
    )
};

export default IconButton;