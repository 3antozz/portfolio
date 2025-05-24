import styles from "./header.module.css";
import Image from "next/image";
import picture from "@/../public/nopic.jpg"
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
        <Image src={picture} alt="Developer picture" priority={true} />
        <div className={styles.right}>
            <h1>Yacine Belahadji</h1>
            <nav>
                <Link href={'/projects'}>PROJECTS</Link>
                <Link href={'/contact'}>CONTACT</Link>
                <Link href={'/about'}>ABOUT</Link>
            </nav>
        </div>
    </header>
  );
}