'use client'
import { useEffect, useState } from "react";
import styles from "./popup.module.css"
import { X } from 'lucide-react';

type Props = {
    children: React.ReactElement,
    shouldRender: string | boolean | null,
    close: React.Dispatch<React.SetStateAction<string | boolean | null>>,
    borderColor?: string
}

export default function Popup ({children, shouldRender, close, borderColor = 'grey'} : Props) {
    const [isVisible, setVisible] = useState(false);
    const [exiting, setExiting] = useState(false)
    const closePopup = () => {
        if(exiting) {
            close(false)
            setVisible(false)
        }
    }
    useEffect(() => {
        if(shouldRender) {
            setVisible(true)
            setExiting(false)
        }
        if(!shouldRender && isVisible) {
            setExiting(true)
        }
    }, [shouldRender, isVisible])
    return (
        <>
        {isVisible &&
            <div className={!exiting ? `${styles.container} ${styles.visible}` : `${styles.container} ${styles.exit}` } onAnimationEnd={closePopup} style={{border: `3px solid ${borderColor}`}}>
                {children}
                <button type="button" onClick={() => {setExiting(true)}}><X color="black" size={20} /></button>
            </div>
        }
        </>
    )
}