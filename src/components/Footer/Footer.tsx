import { Atkinson_Hyperlegible } from 'next/font/google';
import styles from './Footer.module.css';
import Hyperlink from '../Hyperlink/Hyperlink';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className="col-2">
                    <Hyperlink>shop</Hyperlink>
                </div>
                <div className="col-2">

                    <Hyperlink>events</Hyperlink>
                </div>
                <div className="col-2">

                    <Hyperlink>about</Hyperlink>
                </div>
                <div className="col-2">

                </div>

            </div>
        </div>
    )
};

export default Footer;