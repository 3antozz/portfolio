import { LatestProject } from "./definitions";
import OdinBookImg from "@/../public/projects/odinbook/interface.png"
import NodeLogo from "./logos/node";
import ExpressLogo from "./logos/express";
import PostgresLogo from "./logos/postgres";
import PrismaLogo from "./logos/prisma";
import ReactLogo from "./logos/react";



const LastProject : LatestProject = {
        title: 'Social Media App',
        src: OdinBookImg,
        description: <>Full-stack <strong>Twitter</strong>-like social media application built for real-time content sharing and interaction.</>,
        features: [
            <><strong>Core features:</strong> profiles, posts, followage, likes & comments.</>,
            <><strong>Authentification</strong> with <strong>Github</strong> or username & password.</>,
            <><strong>Real time</strong> interaction updates & notifications.</>,
            <><strong>Image</strong> sharing capability.</>,
        ],
        route: '/projects/odinbook',
        stack: {
            backend: [NodeLogo, ExpressLogo, PostgresLogo, PrismaLogo],
            frontend: [ReactLogo]
        },
}

export default LastProject;