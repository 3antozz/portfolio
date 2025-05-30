import styles from "./footer.module.css"
import Image from "next/image"
import GithubLogo from "@/../public/logos/github.svg"
import LinkedinLogo from "@/../public/logos/linkedin.svg"
import { Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2025 Y. Belahadji</p>
            <div className={styles.links}>
                <a href="https://github.com/3antozz" target="_blank" rel="noopener noreferrer">
                    <Image style={{ transform: "scale(0.9)"}} title="Github" src={GithubLogo} alt="Github logo" unoptimized />
                </a>
                <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
                    <Image title="Linkedin" src={LinkedinLogo} alt="Linkedin logo" unoptimized />
                </a>
                <a title="Email" href="mailto:belahadji.yacine@gmail.com">
                    <Mail style={{ transform: "scale(1.05)"}} color="black" />
                </a>
            </div>
            <p>Built with{' '} 
                <a title="NextJS" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">NextJS</a>
            </p>
        </footer>
    )
}