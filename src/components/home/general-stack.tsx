import styles from "./general-stack.module.css";
import myStack from "@/lib/tech";
import { Logo } from "@/lib/definitions";
import { Code, Wrench, Rocket } from "lucide-react";

const { techs , tools, learning } = myStack;

function Section ({list, title, Icon} : {list: Logo[], title: string, Icon: React.ComponentType}) {
    return (
        <div className={styles.wrapper} data-aos={title === "Tools" ? 'fade-left' : title === "Core Stack" ? 'fade-up' : 'fade-right'}>
            <div className={styles.title}>
                <Icon />
                <h3>{title}</h3>
            </div>
            <ul className={styles.tech}>
            {list.map((tech, index) => 
            <li key={index} className={styles.logo}>
                <p>{tech.title}</p>
            </li>
            )}
            </ul>
        </div>  
    )
}

export default function GeneralStack() {
  return (
    <section className={styles.skills} >
        <div className={styles.stack}>
            <Section list={tools} title="Tools" Icon={Wrench}  />
            <Section list={techs} title="Core Stack" Icon={Code} />
            <Section list={learning} title="In Progress" Icon={Rocket} />
        </div>
    </section>
  );
}