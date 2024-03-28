import styles from "./TitleBanner.module.css";

const TitleBanner = ({ title = "", source = "" }) => {
  return (
    <div className={styles.titleBanner}>
      <img src={source}></img>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default TitleBanner;
