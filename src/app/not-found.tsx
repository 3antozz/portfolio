import Link from 'next/link';
import styles from "./not-found.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404',
};
 
export default function NotFound() {
  return (
    <main className={styles.error}>
      <h2 className={styles.heading}>404 Not Found</h2>
      <p>Could not find the requested page.</p>
      <Link href="/" className={styles.link}>Go Back</Link>
    </main>
  );
}