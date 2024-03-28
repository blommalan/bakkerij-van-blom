import { useRouter } from "next/router";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ title = "", navigate = "" }) => {
  const router = useRouter();

  const handleClick = () => {
    if (navigate.length > 0) {
      router.push(navigate);
    }
  };

  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      {title}
    </button>
  );
};

export default PrimaryButton;
