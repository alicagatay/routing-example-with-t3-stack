import Link from "next/link";
import styles from "./index.module.css";
const HomePage = () => {
  return (
    <div className={styles.main}>
      <h1>Home Page</h1>
      <Link href="/firstpage">Go to the first page</Link>
    </div>
  );
};

export default HomePage;
