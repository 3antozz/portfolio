import styles from "./page.module.css";
import ImageCarousel from "@/components/[project]/carousel";
import { CircleCheck, ExternalLink, CircleAlert} from "lucide-react";
import TechStack from "@/components/[project]/tech-stack";
import { notFound } from 'next/navigation';
import { Metadata  } from 'next';
import { projectMap, ProjectSlug } from "@/lib/projects-map";

type Props = {
  params: Promise<{ project: ProjectSlug }>
}


export async function generateMetadata(
  { params  }: Props
): Promise<Metadata> {
    const { project } = await params;
    const projectModule = await projectMap[project]();
    const projectObj = projectModule.default;
    const { title, text_description } = projectObj;
  return {
    title: title,
    description: `${title}, ${text_description}`,
    openGraph: {
      title: title,
      description: `${title}, ${text_description}`,
      url: new URL(`${process.env.WEBSITE_URL!}/${project}`),
      type: "website",
      images: [
          {
              url: '/opengraph-image.jpg',
              width: 1200,
              height: 630,
              alt: 'OpenGraph Image',
          },
      ],
    },
    twitter: {
        title: title,
        description: `${title}, ${text_description}`,
        site: '@3antozzinho',
        images: [
        {
            url: '/opengraph-image.jpg',
            width: 1200,
            height: 630,
            alt: 'OpenGraph Image',
        },
        ]
    },
  }
}


export default async function Project(props: { params: Promise<{ project: ProjectSlug }> }) {
    const { project } = await props.params;
    if(!Object.keys(projectMap).includes(project)) {
        notFound();
    }
    const projectModule = await projectMap[project]();
    const projectObj = projectModule.default;
    const {title, description, features, brief, showcase, stack, github, demo } = projectObj;
    return (
        <main className={styles.project}>
            <section className={styles.header}>
                <h1>{title}</h1>
                <p>{description}</p>
            </section>
            <ImageCarousel slides={showcase} />
            <section className={styles.info} data-aos="fade-up">
                <div data-aos="fade-up">
                    <h2>Why this project ?</h2>
                    <p>{brief}</p>
                </div>
                <div>
                    <h2>Features</h2>
                    <ul className={styles.features}>
                        {features.map((feature, index) => <li key={index}><CircleCheck color="var(--accent)"/><p>{feature}</p></li>)}
                    </ul>
                </div >
                <div className={styles.stack} data-aos="fade-up">
                    <h2>Tech Stack</h2>
                    <TechStack stack={stack}/>
                </div>
                <div className={styles.links} data-aos="fade-up">
                    <div>
                        <a className={`${styles.btn} ${styles.primaryBtn}`} href={demo} target="_blank" rel="noopener noreferrer">
                        <p>Live Demo</p>
                        <ExternalLink style={{flexShrink: 0, transform: "translateY(-5%)"}} />
                        </a>
                        <a className={`${styles.btn} ${styles.secondaryBtn}`} href={github} target="_blank" rel="noopener noreferrer">
                            <p>Github</p>
                            <ExternalLink style={{flexShrink: 0, transform: "translateY(-5%)"}} />
                        </a>
                    </div>
                    <div className={styles.note}>
                        <div className={styles.top}>
                            <CircleAlert size={19} color="var(--link-hover)" />
                            <p>Note</p>
                        </div>
                        <p>Demo is hosted with free tier services, first load might take some time.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
