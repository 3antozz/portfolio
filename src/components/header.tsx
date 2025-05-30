import styles from "./header.module.css";
import Image from "next/image";
import picture from "@/../public/nopic.jpg"
import Nav from "./nav";
import ThemeBtn from "@/components/theme-btn";

export default function Header() {
  return (
    <header className={styles.header}>
        <Image src={picture} alt="Developer picture" priority={true} />
        <div className={styles.right}>
          <div className={styles.name}>
            <h1><span>Hi, I&apos;m </span>Yacine Belahadji</h1>
            <ThemeBtn />
          </div>
          <Nav />
        </div>
    </header>
  );
}