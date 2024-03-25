import styles from "@/styles/Home.module.css";
import ParentToChild from "./ParentOne";
import ChildToParent from "./ParentTwo";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
      <ParentToChild/>
      <ChildToParent/>
      </main>
    </>
  );
}
