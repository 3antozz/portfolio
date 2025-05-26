import styles from "./project.module.css"
import Image from "next/image"
import { CircleCheck, ChevronRight } from 'lucide-react';
import Link from "next/link";
import Stack from "@/components/tech-stack/tech-stack";
import { Project as projectType } from "@/lib/definitions";



export default function Project({ project, featured = false }  : {project: projectType, featured?: boolean}) {
    const { title, src, description, features, stack, link } = project;
    return (
            <div className={styles.card}>
                <Image src={src} alt={`${title} interface image`} />
                <div className={styles.right}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ul>
                        {features.map((feature, index) => <li key={index}><CircleCheck color="var(--accent)"/><p>{feature}</p></li>)}
                    </ul>
                    <Stack logos={stack}/>
                    {/* <div className={styles.stack}>
                        <p><strong>Stack:</strong></p>
                        <Stack logos={stack}/>
                    </div> */}
                    <Link href={featured ? '/projects' : link}>{featured ? 'See All Projects' : 'Details'} <ChevronRight /></Link>
                </div>
            </div>
    )
}