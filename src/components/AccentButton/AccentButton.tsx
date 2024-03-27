import styles from './AccentButton.module.css';

const AccentButton = ({ title = '' }) => {
    return (
        <button className={styles.accentButton} type="button">
            {title}
        </button>
    );
}

export default AccentButton;