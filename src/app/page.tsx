import styles from "./page.module.css";
import Hero from "@/components/home/hero";
import Project from "@/components/projects/project";
import LastProject from "@/lib/projects-overview/dropzone";
import GeneralStack from "@/components/home/general-stack";
import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: {
      canonical: "https://yacinedev.com"
    },
};

export default function Home() {
  return (
    <main className={styles.home}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "mainEntity": {
                "@type": "Person",
                "name": "Yacine Belahadji",
                "url": "https://yacinedev.com",
                "sameAs": [
                  "https://github.com/3antozz", 
                  "https://www.linkedin.com/in/yacine-belahadji/",
                ],
                "jobTitle": "Full-Stack Web Developer",
                "image": "https://yacinedev.com/yacine-picture.jpg",
                "description": "I'm Yacine Belahadji, a full-stack web developer specializing in building modern web applications with Next.js, React, and Express.js."
              }
            },
            {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://yacinedev.com"
              },
            ]
          }]
        )
        }}
      />
      <Hero />
      <GeneralStack />
      <div className={styles.project}>
        <h2>Latest Project</h2>
        <Project project={LastProject} featured inversed={false} />
      </div>
    </main>
  );
}
