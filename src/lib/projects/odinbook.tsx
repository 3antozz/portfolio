import { Project } from "../definitions";
import OdinBookImg from "@/../public/projects/odinbook/interface2.png"
import NodeLogo from "../logos/node";
import ExpressLogo from "../logos/express";
import PostgresLogo from "../logos/postgres";
import PrismaLogo from "../logos/prisma";
import ReactLogo from "../logos/react";
import showcase from "../showcases/odinbook";



const OdinbookProject : Project = {
        title: 'Social Media App',
        src: OdinBookImg,
        description: <>Full-stack <strong>Twitter</strong>-like social media application built for real-time content sharing and interaction.</>,
        text_description: 'Full-stack Twitter-like social media application built for real-time content sharing and interaction.',
        brief: "This was one of the first full-stack projects I created, it's purpose was to tie everything I learned from The Odin Project's course together in a relatively complex project. Social media apps are among the most widely used applications on the web today.",
        features: [
            <><strong>Core features:</strong> profiles, posts, followage, likes & comments.</>,
            <><strong>Authentification</strong> with <strong>Github</strong> or username & password.</>,
            <><strong>Real time</strong> interaction updates & notifications.</>,
            <><strong>Image</strong> sharing capability.</>,
        ],
        route: '/projects/odinbook',
        demo: 'https://odinbook-beta.vercel.app',
        github: 'https://github.com/3antozz/Odin-Book',
        stack: {
            backend: [NodeLogo, ExpressLogo, PostgresLogo, PrismaLogo],
            frontend: [ReactLogo]
        },
        showcase: showcase
}

export default OdinbookProject;