'use client'
import { useEffect } from "react"

export default function FormListener() {
    useEffect(() => {
        const form = document.querySelector('form');
        const listener = () => {
            sessionStorage.setItem('formSubmitted', 'true');
        }
        if(form) {
            form.addEventListener('submit', listener)
        }
        return () => {
            if(form) {
                form.removeEventListener('submit', listener);
            } 
        }
    }, [])
    return (
        <div hidden></div>
    )
}