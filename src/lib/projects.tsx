import { Project } from "./definitions"
import logos from "./logos"
import projectImg from "@/../public/projects/odinbook/interface.png"
const projects: Record<string, Project> = {
    odinbook: {
        title: 'Social Media App',
        src: projectImg,
        description: <>A full-stack <em>Twitter</em>-like social media application designed to provide seamless communication.</>,
        features: [
            <>Authentification with <strong>Github</strong> or username & password.</>,
            <>Real time interaction updates & notifications.</>,
            <>Image sharing capability.</>,
            <>DOM virtualization.</>
        ],
        link: 'https://github.com/3antozz/Odin-Book',
        stack: [
            logos.react, logos.node, logos.express, logos.postgres, logos.vite
        ],
    }
}

export default projects;