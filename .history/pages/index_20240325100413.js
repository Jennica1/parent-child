import styles from "@/styles/Home.module.css";
import ParentToChild from "./ParentOne";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
      <ParentToChild/>
      </main>
    </>
  );
}
