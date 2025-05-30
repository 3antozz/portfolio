import styles from "./page.module.css";
import Project from "@/components/projects/project";
import projects from "@/lib/projects";

export default function Home() {
  const projectss = Object.values(projects);
  return (
    <main className={styles.projects}>
      <div className={styles.headers}>
        <h2>Projects</h2>
        <p>Some projects I built in my learning journey.</p>
      </div>

      {projectss.map((prjct, index) => <Project key={prjct.title} project={prjct} inversed={index % 2 !== 0} />)}
    </main>
  );
}
