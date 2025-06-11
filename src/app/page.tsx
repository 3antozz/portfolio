import styles from "./page.module.css";
import Hero from "@/components/home/hero";
import Project from "@/components/projects/project";
import LastProject from "@/lib/projects-overview/odinbook";
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
          __html: JSON.stringify({
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
          })
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
