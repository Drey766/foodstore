import Image from "next/image";
import styles from "./page.module.css";
import FirstDiv from "./components/home/FirstDiv";
import Second from "./components/home/Second";
import Third from "./components/home/Third";
import Menu from "./components/home/Menu";
import Fifth from "./components/home/Fifth";
import Chef from "./components/home/Chef";
import Review from "./components/home/Review";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <FirstDiv />
        <Second />
        <Third />
        <Menu />
        <Fifth />
        <Review />
        <Chef />
      </main>
    </div>
  );
}
