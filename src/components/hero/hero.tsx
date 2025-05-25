import styles from "./hero.module.css";
import { Terminal } from 'lucide-react';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Terminal size={40} color="var(--text-clr)" />
            <div className={styles.right}>
                <h2>Fullstack Web Developer</h2> 
                <p>I build web apps with&nbsp; 
                    <a style={{borderBottom: '3px solid blue'}} href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>,&nbsp;
                    <a style={{borderBottom: '3px solid red'}} href="https://react.dev/" target="_blank" rel="noopener noreferrer">React.js</a>,&nbsp;
                    <a style={{borderBottom: '3px solid #15ee15'}} href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node.js</a> with&nbsp;
                    <a style={{borderBottom: '3px solid mediumpurple'}} href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express</a> &&nbsp;
                    <a style={{borderBottom: '3px solid #ff6bfc'}} href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a>.
                </p>
            </div>
            {/* <Link href='/contact'>Get In Touch</Link> */}
        </section>
    );
}