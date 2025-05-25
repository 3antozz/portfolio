import styles from "./header.module.css";
import Image from "next/image";
import picture from "@/../public/nopic.jpg"
import Nav from "./nav";

export default function Header() {
  return (
    <header className={styles.header}>
        <Image src={picture} alt="Developer picture" priority={true} />
        <div className={styles.right}>
            <h1>Hi, I&apos;m Yacine Belahadji</h1>
            <Nav />
        </div>
    </header>
  );
}