import styles from "./hero.module.css";
import { Terminal, ChevronRight } from 'lucide-react';
import Link from "next/link";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div>
                <Terminal size={50} color="var(--text-clr)" />
                <div className={styles.right}>
                    <h1><span>&#128187;</span>{' '}Fullstack Web Developer</h1> 
                    <p>I build web apps with{' '} 
                        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>,{' '}
                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>,{' '}
                        <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node.js</a> with{' '}
                        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express</a> &{' '}
                        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a>.
                    </p>
                    <p>
                        <strong>Eager</strong> to learn, <strong>quick</strong> to pick up new skills and highly <strong>motivated</strong>.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link className={`${styles.btn} ${styles.primaryBtn}`} href='/projects'>
                            View Projects
                            <ChevronRight />
                        </Link>
                        <Link className={`${styles.btn} ${styles.secondaryBtn}`} href='/contact'>Get In Touch</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}