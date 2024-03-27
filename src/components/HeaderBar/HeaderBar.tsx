import IconButton from '../IconButton/IconButton';
import AccountCircleIcon from '../Icons/AccountCircleIcon';
import ShoppingCartIcon from '../Icons/ShoppingCartIcon';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import styles from './HeaderBar.module.css';

const HeaderBar = () => {
    return (
        <div className={styles.headerBar}>
            <div className={styles.leftSection}>
                <PrimaryButton title="home"></PrimaryButton>
                <PrimaryButton title="shop"></PrimaryButton>
                <PrimaryButton title="events"></PrimaryButton>
                <PrimaryButton title="how it works"></PrimaryButton>
            </div>

            <div className={styles.rightSection}>
                <IconButton><AccountCircleIcon></AccountCircleIcon></IconButton>
                <IconButton><ShoppingCartIcon></ShoppingCartIcon></IconButton>
            </div>
      </div>
    );
};

export default HeaderBar;