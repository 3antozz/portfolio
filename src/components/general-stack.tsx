import styles from "./general-stack.module.css";
import Image from "next/image";
import myStack from "@/lib/tech";

const { techs , tools, learning } = myStack;

export default function GeneralStack() {
  return (
    <section className={styles.skills} data-aos="fade-up">
        <div className={styles.stack}>
            <div className={styles.wrapper}>
                <h3>Technologies</h3>
                <ul className={styles.tech}>
                {techs.map((tech, index) => 
                <li key={index} className={styles.logo}>
                    <Image className={styles[tech.class]} title={tech.title} src={tech.src} alt={`${tech.title} logo`} unoptimized />
                    <p>{tech.title}</p>
                </li>
                )}
                </ul>
            </div>
            <div className={styles.wrapper}>
                <h3>Tools</h3>
                <ul className={styles.tools}>
                {tools.map((tech, index) => <li key={index} className={styles.logo}>
                    <Image className={styles[tech.class]} title={tech.title} src={tech.src} alt={`${tech.title} logo`} unoptimized />
                    <p>{tech.title}</p>
                </li>)}
                </ul>
            </div>
            <div className={styles.wrapper}>
                <h3>Currently Learning</h3>
                <ul className={styles.tech}>
                {learning.map((tech, index) => 
                <li key={index} className={styles.logo}>
                    <Image className={styles[tech.class]} title={tech.title} src={tech.src} alt={`${tech.title} logo`} unoptimized />
                    <p>{tech.title}</p>
                </li>
                )}
                </ul>
            </div>
        </div>
    </section>
  );
}