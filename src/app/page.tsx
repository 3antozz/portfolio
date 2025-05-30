import styles from "./page.module.css";
import Hero from "@/components/home/hero";
import Project from "@/components/projects/project";
import projects from "@/lib/projects";

const { odinbook } = projects;

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <section className={styles.project}>
        <h2>Latest Project</h2>
        <Project project={odinbook} featured inversed={false} />
      </section>
    </main>
  );
}
