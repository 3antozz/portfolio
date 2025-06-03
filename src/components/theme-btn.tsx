'use client'
import styles from "./theme-btn.module.css";
import { useEffect, useState } from "react";
import { Moon, SunMedium } from 'lucide-react';


export default function ThemeBtn() {
    const [theme, setTheme] = useState('light');
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light';
        setTheme(theme);
        setHidden(false)
    }, [])
    const switchTheme = () : void => {
        const element = document.querySelector('html');
        if(element) {
            if(element.className === 'dark') {
                element.className = 'light';
                localStorage.setItem('theme', 'light')
                setTheme('light')
            } else {
                element.className = 'dark';
                localStorage.setItem('theme', 'dark')
                setTheme('dark')
            }
        }
    }
    return (
        <button aria-label='change theme' title="Change Theme" style={{opacity: hidden ? '0' : '1'}} onClick={switchTheme} className={styles.button}>{theme === 'light' ? <SunMedium size={30} /> : <Moon size={30} />}</button>
    );
}