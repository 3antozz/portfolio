'use client'
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
export default function ScrollButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 150);
        };
        
        toggleVisibility();
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <button aria-label='scroll to top' style={{opacity: visible ? "1" : "0", pointerEvents: visible ? 'auto' : 'none'}} 
                className="scroll-up" onClick={scrollToTop}>
                <ArrowUp color='var(--background)' />
        </button>
    )
}