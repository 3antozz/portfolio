import styles from "./general-stack.module.css";
// import Image from "next/image";
import myStack from "@/lib/tech";
import { Logo } from "@/lib/definitions";
import { Code, Wrench, Rocket } from "lucide-react";

const { techs , tools, learning } = myStack;

function Section ({list, title, Icon} : {list: Logo[], title: string, Icon: React.ComponentType}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                {/* <Image title={title} src={tech.src} alt={`${title} logo`} unoptimized /> */}
                <Icon />
                <h3>{title}</h3>
            </div>
            <ul className={styles.tech}>
            {list.map((tech, index) => 
            <li key={index} className={styles.logo}>
                {/* <Image className={styles[tech.class]} title={tech.title} src={tech.src} alt={`${tech.title} logo`} unoptimized /> */}
                <p>{tech.title}</p>
            </li>
            )}
            </ul>
        </div>  
    )
}

export default function GeneralStack() {
  return (
    <section className={styles.skills} data-aos="fade-up">
        <div className={styles.stack}>
            <Section list={tools} title="Tools" Icon={Wrench}  />
            <Section list={techs} title="Core Stack" Icon={Code} />
            <Section list={learning} title="In Progress" Icon={Rocket} />
        </div>
    </section>
  );
}