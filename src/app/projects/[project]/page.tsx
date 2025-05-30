import styles from "./page.module.css";
import projects from "@/lib/projects";
import ImageCarousel from "@/components/[project]/carousel";
import { CircleCheck, ExternalLink} from "lucide-react";
import TechStack from "@/components/[project]/tech-stack";

type ProjectKey = keyof typeof projects;

export default async function Project(props: { params: Promise<{ project: ProjectKey }> }) {
    const { project } = await props.params;
    const {title, description, features, brief, showcase, stack, github, demo } = projects[project];
    return (
        <main className={styles.project}>
            {/* <Link title="Back" href={'/projects'} className={styles.back}><ArrowLeft color='var(--text-clr)' /></Link> */}
            <section className={styles.header}>
                <h2>{title}</h2>
                <p>{description}</p>
            </section>
            <ImageCarousel slides={showcase} />
            <section className={styles.info}>
                <div>
                    <h3>Why this project ?</h3>
                    <p>{brief}</p>
                </div>
                <div>
                    <h3>Features</h3>
                    <ul className={styles.features}>
                        {features.map((feature, index) => <li key={index}><CircleCheck color="var(--accent)"/><p>{feature}</p></li>)}
                    </ul>
                </div>
                <div className={styles.stack}>
                    <h3>Tech Stack</h3>
                    <TechStack stack={stack}/>
                </div>
                <div className={styles.links}>
                    <a className={`${styles.btn} ${styles.primaryBtn}`} href={demo} target="_blank" rel="noopener noreferrer">
                       <p>Live Demo</p>
                       <ExternalLink style={{flexShrink: 0}} />
                    </a>
                    <a className={`${styles.btn} ${styles.secondaryBtn}`} href={github} target="_blank" rel="noopener noreferrer">
                        <p>Github</p>
                        <ExternalLink style={{flexShrink: 0}} />
                    </a>
                </div>
            </section>
        </main>
    );
}
