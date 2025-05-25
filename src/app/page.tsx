import styles from "./page.module.css";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
    </div>
  );
}
