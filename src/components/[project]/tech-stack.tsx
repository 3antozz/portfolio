import styles from "./tech-stack.module.css";
import { Stack } from "@/lib/definitions";
import Image from "next/image";

export default function TechStack({stack} : {stack: Stack}) {
    const logos = [...stack.frontend, ...stack.backend];
    return (
    <div className={styles.stack}>
        <div className={styles.wrapper}>
            {/* <h4>Frontend</h4> */}
            <ul className={styles.frontend}>
                {logos.map((logo, index) => (
                <li key={index} className={styles.logo}>
                    <Image key={logo.title} className={styles[logo.class]} title={logo.title} src={logo.src} alt={`${logo.title} logo`} unoptimized />
                    <p>{logo.title}</p>
                </li>
                ))}
            </ul>
        </div>
        {/* <div className={styles.wrapper}>
            <h4>Backend</h4>
            <ul className={styles.backend}>
                {stack.backend.map((logo, index) => (
                <li key={index} className={styles.logo}>
                    <Image key={logo.title} className={styles[logo.class]} title={logo.title} src={logo.src} alt={`${logo.title} logo`} unoptimized />
                    <p>{logo.title}</p>
                </li>
                ))}
            </ul>
        </div> */}
    </div>
    );
}

