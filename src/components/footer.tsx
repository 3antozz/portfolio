import styles from "./footer.module.css"
import Image from "next/image"
import GithubLogo from "@/../public/logos/github.svg"
import LinkedinLogo from "@/../public/logos/linkedin.svg"
import Link from "next/link"
import { Mail, FileUser } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <p>© 2025 <strong>Yacine Belahadji</strong></p>
                <div className={styles.links}>
                    <a href="https://github.com/3antozz" target="_blank" rel="noopener noreferrer">
                        <Image style={{ transform: "scale(0.9) translate(-1%, -2%)"}} title="Github" src={GithubLogo} alt="Github logo" unoptimized />
                    </a>
                    <a href="https://www.linkedin.com/in/yacine-belahadji-b21a60270/" target="_blank" rel="noopener noreferrer">
                        <Image title="Linkedin" src={LinkedinLogo} alt="Linkedin logo" unoptimized />
                    </a>
                    <Link title="Contact" href="/contact">
                        <Mail style={{ transform: "translateX(2%)"}} color="black" />
                    </Link>
                    <a title="Resume" href="/Yacine_BELAHADJI_resume.pdf" target="_blank" rel="noopener noreferrer">
                        <FileUser color="black" />
                    </a>
                </div>
            </div>
            <div className={styles.line}>
                {' '}
            </div>
            <div className={styles.bottom}>
                <p>Built with{' '} 
                    <a title="NextJS" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">NextJS</a>
                </p>
            </div>
        </footer>
    )
}