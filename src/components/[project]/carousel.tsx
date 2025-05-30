'use client'
import styles from "./carousel.module.css";
import { useState, useRef } from "react";
import Image from "next/image";
import { Showcase } from "@/lib/definitions";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ slides }: { slides: Showcase[] }) {
    const [current, setCurrent] = useState(0);
    const imgRef = useRef<HTMLImageElement>(null)

    const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const toggleClass = () => {
        if(imgRef.current?.classList) {
            imgRef.current.classList.add("fade")
        }
    }

    const removeClass = () => {
        if(imgRef.current?.classList) {
            imgRef.current.classList.remove("fade")
        }
    }
    
    return (
    <section className={styles.carousel}>
        <div className={styles.slide}>
        {slides.length > 1 && <button className={`${styles.nav} ${styles.left}`} onClick={prevSlide}><ChevronLeft style={{transform: "translateX(-5%)"}} /></button>}
        <Image
            src={slides[current].image}
            alt={`${slides[current].title} of the project`}
            ref={imgRef}
            onLoad={toggleClass}
            onAnimationEnd={removeClass}
        />
        {slides.length > 1 && <button className={`${styles.right} ${styles.nav}`} onClick={nextSlide}><ChevronRight style={{transform: "translateX(5%)"}} /></button>}
        </div>
        <p className={styles.caption}>{slides[current].title}</p>
        {slides.length > 1 && <div className={styles.dots}>
        {slides.map((_, i) => (
            <span
            key={i}
            className={`${styles.dot} ${i === current ? styles.active : ""}`}
            onClick={() => setCurrent(i)}
            />
        ))}
        </div>}
    </section>
    );
}

