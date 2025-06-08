'use client'
import styles from "./nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";

const routes = [
    { label: 'OVERVIEW', path: '/' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'ABOUT', path: '/about' }
];



export default function Nav() {
    const pathname = usePathname();
    const containerRef = useRef<(HTMLElement | null)>(null);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, top: 0, width: 0, height: 0 });
    const [isReady, setReady] = useState(false)
    function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number) {
        let timeoutId: ReturnType<typeof setTimeout>;
        return (...args: Parameters<T>) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn(...args), delay);
        };
    }
    useEffect(() => {
        const updateIndicator = () => {
            const index = routes.findIndex(route => pathname === route.path);
            const linkElement = linkRefs.current[index];
            if(linkElement && containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const {left, top, width, height } = linkElement.getBoundingClientRect();
                setIndicatorStyle({
                    left: left - containerRect.left,
                    top: top - containerRect.top,
                    height,
                    width,
                });
                setReady(true)
            }
        }
        updateIndicator();
        const debounceUpdate = debounce(updateIndicator, 100);
        window.addEventListener('resize', debounceUpdate);

        return () => {
            window.removeEventListener('resize', updateIndicator);
        };
    }, [pathname])
    return (
            <nav className={styles.nav} ref={containerRef}>
                {isReady && <div className={styles.indicator} style={{ left: `${indicatorStyle.left}px`, top: `${indicatorStyle.top}px`, width: `${indicatorStyle.width}px`, height: `${indicatorStyle.height}px` }}></div>}
                {routes.map((route, index) => <Link key={route.label} ref={element => {linkRefs.current[index] = element}} aria-label="Breadcrumb" className={`${pathname === route.path ? styles.active : ''} ${isReady ? styles.ready : ''}`} href={route.path}>{route.label}</Link>)}
            </nav>
    );
}