import styles from './PrimaryButton.module.css';

const PrimaryButton = ({ title = '' }) => {
    return (
        <button className={styles.button} type="button">
            {title}
        </button>
    );
}

export default PrimaryButton;