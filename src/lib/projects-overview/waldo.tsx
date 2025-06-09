import { ProjectOverview } from "../definitions";
import WaldoImg from "@/../public/projects/where's-waldo/welcome.png"
import NodeLogo from "../logos/node";
import ExpressLogo from "../logos/express";
import PostgresLogo from "../logos/postgres";
import PrismaLogo from "../logos/prisma";
import ReactLogo from "../logos/react";



const WaldoProject : ProjectOverview = {
        title: 'Where is Waldo ?',
        src: WaldoImg,
        description: <>Full-stack <strong>Photo Tagging</strong> game where your goal is to find all the hidden characters as fast as possible.</>,
        features: [
            <><strong>Server side</strong> character location checking.</>,
            <><strong>Server side</strong> stopwatch timer to prevent cheating.</>,
            <>Top-10 <strong>leaderboard</strong> sorted by fastest times.</>,
        ],
        route: '/projects/where_is_waldo',
        stack: {
            backend: [NodeLogo, ExpressLogo, PostgresLogo, PrismaLogo],
            frontend: [ReactLogo]
        },
}

export default WaldoProject;