import Link from "next/link"
import styles from './page.module.css'
import Image from "next/image";
import myStack from "@/lib/tech";

const { techs , tools, learning } = myStack;

export default function About() {
  return (
      <main className={styles.page}>
        <section className={styles.intro}>
            <h2 className={styles.heading1}>About Me</h2>
            <p className={styles.paragraph}>
                Hello, Im <em>Yacine Belahadji</em>, 24 yo — from <em>Algeria</em>. I&apos;m a modern full-stack Javascript web developer focused on building fast, user-friendly, and responsive web applications.
                My tech stack is modern and I&apos;m always looking to learn new things to improve my skills and creations.
            </p>
        </section>

        <section className={styles.journey}>
            <h2 className={styles.heading2}>My Journey</h2>
            <p className={styles.paragraph}>
                I graduated as an architect, where I learned how to approach complex problems with both creativity and structure. Even though I didn’t pursue it professionally, it taught me how to think critically, work within constraints, and build with purpose.
                <br></br>
                <br></br>
                Since my childhood i was always interested in technology, I started using a computer regularly at a young age. Over time, I realized that coding challenged me in ways I found more engaging. It felt more stimulating; faster feedback, direct problem-solving, and a clearer way to meet real human needs. I enjoyed how quickly ideas could come to life and how immediate the impact could be.
                <br></br>
                <br></br>
                I started learning web development since 2023, I went through the full-stack curriculum of <a style={{color: "var(--accent)", textDecoration: "none"}} href="https://www.theodinproject.com/">The Odin Project</a> where I learned everything from basic HTML CSS JS to using advanced tools like frameworks and libraries. I also learned more outside of that course to fill-in the gaps, such as NextJS, SEO, TypeScript...
                <br></br>
                <br></br>
                Now, as a web developer, I focus on building clean, modern, and user-focused applications. I still carry over a lot from architecture — from system thinking to attention to detail — but now I apply it through code.
            </p>
        </section>

        <section className={styles.skills}>
            <h2 className={styles.heading2}>Tech Stack</h2>
            <div className={styles.stack}>
                <div className={styles.wrapper}>
                    <h4>Technologies</h4>
                    <ul className={styles.tech}>
                    {techs.map((tech, index) => 
                    <li key={index} className={styles.logo}>
                        <Image className={styles[tech.class]} title={tech.title} src={tech.src} alt={`${tech.title} logo`} unoptimized />
                        <p>{tech.title}</p>
                    </li>
                    )}
                    </ul>
                </div>
                <div className={styles.wrapper}>
                    <h4>Tools</h4>
                    <ul className={styles.tools}>
                    {tools.map((tech, index) => <li key={index} className={styles.logo}>
                        <Image className={styles[tech.class]} title={tech.title} src={tech.src} alt={`${tech.title} logo`} unoptimized />
                        <p>{tech.title}</p>
                    </li>)}
                    </ul>
                </div>
                <div className={styles.wrapper}>
                    <h4>Currently Learning</h4>
                    <ul className={styles.tech}>
                    {learning.map((tech, index) => 
                    <li key={index} className={styles.logo}>
                        <Image className={styles[tech.class]} title={tech.title} src={tech.src} alt={`${tech.title} logo`} unoptimized />
                        <p>{tech.title}</p>
                    </li>
                    )}
                    </ul>
                </div>
            </div>
        </section>

        <section className={styles.personal}>
            <h2 className={styles.heading2}>Outside of Coding</h2>
            <p className={styles.paragraph}>
                I enjoy going to the gym to stay in shape, I&apos;m also a UFC fan. I do stream on <a style={{color: "inherit"}} href="https://www.twitch.tv/3antozz">Twitch</a> playing video games sometimes.
            </p>
          </section>

        <section className={styles.contactLink}>
            <h2 className={styles.heading2}>Want to work together?</h2>
            <p className={styles.paragraph}>
                  Let’s get in touch — <Link style={{color: "var(--accent)", textDecoration: "none"}} href="/contact">Contact me here</Link>.
            </p>
        </section>
      </main>
  )
}