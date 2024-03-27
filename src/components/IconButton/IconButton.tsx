import { ReactNode } from 'react';
import styles from './IconButton.module.css'
import { Tooltip } from "@nextui-org/react";

interface IconButtonProps {
    tooltipText?: string;
    children: ReactNode; //Children should be the icon
}

const IconButton = ({ tooltipText = '', children }: IconButtonProps) => {
    return (
        <Tooltip content={tooltipText}>
            <button className={styles.iconButton}>
                {children}
            </button>
        </Tooltip>
    )
};

export default IconButton;