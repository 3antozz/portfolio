import styles from "./page.module.css";
import Hero from "@/components/home/hero";
import Project from "@/components/projects/project";
import LastProject from "@/lib/latest-project";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <section className={styles.project}>
        <h2>Latest Project</h2>
        <Project project={LastProject} featured inversed={false} />
      </section>
    </main>
  );
}
