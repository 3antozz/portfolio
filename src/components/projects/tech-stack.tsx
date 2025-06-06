import styles from "./tech-stack.module.css";
import Image from "next/image";
import { Logo } from "@/lib/definitions";
export default function Stack({ logos } : {logos: Logo[] }) {
  return (
      <div className={styles.logos}>
        { logos.map((logo) => <Image key={logo.title} className={styles[logo.class]} title={logo.title} src={logo.src || 'string'} alt={`${logo.title} logo`} unoptimized />)}
      </div>
  );
}