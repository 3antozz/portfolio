import styles from "./page.module.css";
import Project from "@/components/projects/project";
// import projects from "@/lib/projects";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of full-stack projects by Yacine Belahadji, built with technologies like React, Next.js, Express.js, and Postgresql.',
  openGraph: {
      title: 'Yacine Belahadji | Projects',
      description: 'A collection of full-stack projects by Yacine Belahadji, built with technologies like React, Next.js, Express.js, and Postgresql.',
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
    title: 'Yacine Belahadji | Projects',
    description: 'A collection of full-stack projects by Yacine Belahadji, built with technologies like React, Next.js, Express.js, and Postgresql.',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OpenGraph Image',
      },
    ]
  },
};

const projectList = [
  "odinbook",
  "messenger",
  "waldo",
  "blog-page",
  "file-uploader",
];

export default async function Projects() {
  const projects = await Promise.all(
    projectList.map((project) => import(`@/lib/projects/${project}`).then(mod => mod.default))
  );
  return (
    <main className={styles.projects}>
      <div className={styles.headers}>
        <h1>Projects</h1>
        <p>Some projects I built in my learning journey.</p>
      </div>

      {projects.map((prjct, index) => <Project key={prjct.title} project={prjct} index={index} inversed={index % 2 !== 0} />)}
    </main>
  );
}
