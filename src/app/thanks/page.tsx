import styles from "./page.module.css";
import Link from "next/link";
import Gate from "./gate";

export default function Thanks() {
  return (
    <main className={styles.thanks}>
      <Gate />
      <h2>Message Sent!</h2>
      <p>Thank you for reaching out! I will get back to you as soon as possible.</p>
      <Link href={'/'}>Go back</Link>
    </main>
  );
}
