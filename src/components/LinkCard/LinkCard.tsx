import styles from './LinkCard.module.css';

const LinkCard = ({ source = '', altText = '', link = '', linkText = ''}) => {
    return (
        <div className={styles.linkCard}>
            <img alt={altText} src={source}></img>
            <div>
                <a href={link}>{linkText}</a>
            </div>
        </div>
    )
}

export default LinkCard;