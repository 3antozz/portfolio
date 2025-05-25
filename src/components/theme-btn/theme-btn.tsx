'use client'
import styles from "./theme-btn.module.css";
import { useEffect, useState } from "react";
import { Moon, SunMedium } from 'lucide-react';


export default function ThemeBtn() {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light';
        const element = document.querySelector('html');
        if(element) {
            element.className = theme;
            setTheme(theme);
        }
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
        <button onClick={switchTheme} className={styles.button}>{theme === 'light' ? <SunMedium size={25} color="black" /> : <Moon size={25} color="white" />}</button>
    );
}