'use client'
import { useEffect } from "react"

export default function Scroller() {
    useEffect(() => {
        const main = document.querySelector('main')
        if(main) {
            setTimeout(() => main.scrollIntoView({ behavior: 'smooth', block: 'start' }), 250)
        }
    }, [])
    return (
        <div hidden></div>
    )
}