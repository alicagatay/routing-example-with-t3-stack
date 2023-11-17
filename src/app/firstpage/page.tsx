import Link from "next/link";
import styles from "./styles.module.css";
const FirstPage = () => {
  return (
    <div className={styles.main}>
      <h1>First Page</h1>
      <Link href="/">Go back to the home page</Link>
    </div>
  );
};

export default FirstPage;
