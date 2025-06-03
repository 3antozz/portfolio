import styles from "./project.module.css"
import Image from "next/image"
import { CircleCheck, ChevronRight } from 'lucide-react';
import Link from "next/link";
import Stack from "@/components/projects/tech-stack";
import { Project as projectType, LatestProject } from "@/lib/definitions";



export default function Project({ project, featured = false, inversed = false, index = 1 }  : {project: projectType | LatestProject, featured?: boolean, inversed: boolean, index?: number}) {
    const { title, src, description, features, stack, route } = project;
    const logos = [...stack.frontend, ...stack.backend]
    return (
        <section className={styles.card} data-aos={index > 0 ? "fade-up" : ""}>
            <Link href={featured ? '/projects' : route} className={inversed ? `${styles.inversed}` : ""} aria-label={featured ? 'See All Projects' : `${title} project details`}><Image src={src} alt={`${title} interface image`} priority={index > 0 ? false : true} /></Link>
            <div className={styles.right} style={{maxWidth: featured ? "40%" : "35%"}}>
                <h2>{title}</h2>
                <p className={styles.description}>{description}</p>
                <ul>
                    {features.map((feature, index) => <li key={index}><CircleCheck color="var(--accent)"/><p>{feature}</p></li>)}
                </ul>
                <Stack logos={logos}/>
                <Link href={featured ? '/projects' : route}>{featured ? 'See All Projects' : 'Project Details'} <ChevronRight  /></Link>
            </div>
        </section>
    )
}