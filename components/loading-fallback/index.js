import styles from "./loading-fallback.module.css";

const LoadingFallback = ({ message }) => {
  return <h1 className={styles.loading}>{message}</h1>;
};

export default LoadingFallback;
