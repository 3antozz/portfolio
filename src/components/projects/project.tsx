import styles from "./project.module.css"
import Image from "next/image"
import { CircleCheck, ChevronRight } from 'lucide-react';
import Link from "next/link";
import Stack from "@/components/projects/tech-stack";
import { Project as projectType } from "@/lib/definitions";



export default function Project({ project, featured = false, inversed = false }  : {project: projectType, featured?: boolean, inversed: boolean}) {
    const { title, src, description, features, stack, route } = project;
    const logos = [...stack.frontend, ...stack.backend]
    return (
            <section className={styles.card}>
                <Image src={src} alt={`${title} interface image`} className={inversed ? `${styles.inversed}` : ""} />
                <div className={styles.right} style={{maxWidth: featured ? "40%" : "35%"}}>
                    <h3>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <ul>
                        {features.map((feature, index) => <li key={index}><CircleCheck color="var(--accent)"/><p>{feature}</p></li>)}
                    </ul>
                    <Stack logos={logos}/>
                    <Link href={featured ? '/projects' : route}>{featured ? 'See All Projects' : 'Details'} <ChevronRight /></Link>
                </div>
            </section>
    )
}