'use client'
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function FadeWrapper() {
    useEffect(() => {
        AOS.init({
        once: true,
        duration: 500,
    });
    }, [])
    return (
        <></>
    )
}