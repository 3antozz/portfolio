'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation";

export default function Gate() {
    const router = useRouter();
    useEffect(() => {
        const isSubmitted = sessionStorage.getItem('formSubmitted');
        if(isSubmitted === 'true') {
            sessionStorage.removeItem('formSubmitted');
        } else {
            router.replace('/')
        }
    }, [router])
    return (
        <div hidden></div>
    )
}