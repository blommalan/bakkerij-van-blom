import { ReactNode } from "react";
import styles from "./Hyperlink.module.css";

interface HyperlinkProps {
    link?: string;
    children: ReactNode;
}

const Hyperlink = ({ link, children }: HyperlinkProps) => {
    return (
        <a className={styles.hyperlink} href={link}>{children}</a>
    )
};

export default Hyperlink;