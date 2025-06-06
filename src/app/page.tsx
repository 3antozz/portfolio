import styles from "./page.module.css";
import Hero from "@/components/home/hero";
import Project from "@/components/projects/project";
import LastProject from "@/lib/latest-project";
import GeneralStack from "@/components/home/general-stack";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <h2>Technologies Stack</h2>
      <GeneralStack />
      <section className={styles.project}>
        <h2>Latest Project</h2>
        <Project project={LastProject} featured inversed={false} />
      </section>
    </main>
  );
}
