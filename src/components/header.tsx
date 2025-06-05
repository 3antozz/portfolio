import styles from "./header.module.css";
import Image from "next/image";
import picture from "@/../public/yacine-picture.jpg"
import Nav from "./nav";
import ThemeBtn from "@/components/theme-btn";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={'/'} aria-label="Yacine Belahadji Homepage"><Image src={picture} alt="Yacine belahadji picture" priority={true} /></Link>
      <div className={styles.right}>
        <div className={styles.name}>
          <Link href={'/'} aria-label="Yacine Belahadji Homepage"><span>Hi, I&apos;m </span>Yacine Belahadji</Link>
          <ThemeBtn />
        </div>
        <Nav />
      </div>
    </header>
  );
}