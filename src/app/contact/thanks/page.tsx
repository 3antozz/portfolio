import styles from "./page.module.css";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thanks',
};

export default async function Thanks({searchParams} : {searchParams: {submitted?: string}}) {
  const { submitted } = await searchParams;
  if (submitted !== 'true') {
    redirect('/');
  }
  return (
    <main className={styles.thanks}>
      <h1>Message Sent!</h1>
      <p>Thank you for reaching out! I will get back to you as soon as possible.</p>
      <Link href={'/'}>Go back</Link>
    </main>
  );
}
