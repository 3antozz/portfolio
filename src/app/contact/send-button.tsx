'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import Popup from "@/components/popup";

export default function SendButton() {
    const router = useRouter();
    const [error, setError] = useState<string | boolean | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        const form = document.querySelector('form');
        const listener = async (e: SubmitEvent) => {
            e.preventDefault();
            const formData = new FormData(form as HTMLFormElement);
            const data = Object.fromEntries(formData);
            try {
                setLoading(true)
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const result = await res.json();
                if(res.status == 400) {
                    throw new Error(result.error || 'Something went wrong.');
                }
                if (!res.ok) {
                    throw new Error('Something went wrong.');
                }
                router.push('/contact/thanks?submitted=true')
                
            } catch(error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred, try again later or contact me via Linkedin.')
                }
            } finally {
                setLoading(false)
            }
        }
        if(form) {
            form.addEventListener('submit', listener)
        }
        return () => {
            if(form) {
                form.removeEventListener('submit', listener);
            } 
        }
    }, [router])
    return (
        <>
        <Popup close={setError} shouldRender={error} borderColor="none">
            <p>{error}</p>
        </Popup>
        <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
        </>
    )
}