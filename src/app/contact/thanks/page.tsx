import styles from "./page.module.css";
import Link from "next/link";
import Gate from "./gate";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thanks',
};

export default function Thanks() {
  return (
    <main className={styles.thanks}>
      <Gate />
      <h1>Message Sent!</h1>
      <p>Thank you for reaching out! I will get back to you as soon as possible.</p>
      <Link href={'/'}>Go back</Link>
    </main>
  );
}
