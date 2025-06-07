'use client'
import styles from "./nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Nav() {
    const pathname = usePathname();
    return (
            <nav className={styles.nav}>
                <Link aria-label="Breadcrumb" className={pathname === '/' ? `${styles.active}` : ''} href={'/'}>OVERVIEW</Link>
                <Link aria-label="Breadcrumb" className={pathname === '/projects' ? `${styles.active}` : ''} href={'/projects'}>PROJECTS</Link>
                <Link aria-label="Breadcrumb" className={pathname === '/contact' ? `${styles.active}` : ''} href={'/contact'}>CONTACT</Link>
                <Link aria-label="Breadcrumb" className={pathname === '/about' ? `${styles.active}` : ''} href={'/about'}>ABOUT</Link>
            </nav>
    );
}