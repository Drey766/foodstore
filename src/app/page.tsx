import Image from "next/image";
import styles from "./page.module.css";
import FirstDiv from "./components/home/FirstDiv";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <FirstDiv />
      </main>
    </div>
  );
}
