import { ReactNode } from 'react';
import styles from './Tooltip.module.css';
import { Tooltip as NextTooltip } from '@nextui-org/react';

interface TooltipProps {
    children: ReactNode;
    content: string;
}

const Tooltip = ({ children, content }: TooltipProps) => {
    return (
        <NextTooltip className={styles.tooltip} content={content}>
            {children}
        </NextTooltip>
    )
}

export default Tooltip;