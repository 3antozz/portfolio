import { Project } from "../definitions";
import WaldoImg from "@/../public/projects/where's-waldo/welcome.png"
import NodeLogo from "../logos/node";
import ExpressLogo from "../logos/express";
import PostgresLogo from "../logos/postgres";
import PrismaLogo from "../logos/prisma";
import ReactLogo from "../logos/react";
import showcase from "../showcases/waldo";



const WaldoProject : Project = {
        title: 'Where is Waldo ?',
        src: WaldoImg,
        description: <>Full-stack <strong>Photo Tagging</strong> game where your goal is to find all the hidden characters as fast as possible.</>,
        text_description: 'Full-stack Photo Tagging game where your goal is to find all the hidden characters as fast as possible.',
        brief: "This was one of the first full-stack projects I created, it's purpose was to tie everything I learned from The Odin Project's course together in a fun project.",
        features: [
            <><strong>Server side</strong> character location checking.</>,
            <><strong>Server side</strong> stopwatch timer to prevent cheating.</>,
            <>Top-10 <strong>leaderboard</strong> sorted by fastest times.</>,
        ],
        route: '/projects/where_is_waldo',
        demo: 'https://where-is-waldo-sepia.vercel.app',
        github: 'https://github.com/3antozz/Where-is-Waldo',
        stack: {
            backend: [NodeLogo, ExpressLogo, PostgresLogo, PrismaLogo],
            frontend: [ReactLogo]
        },
        showcase: showcase
}

export default WaldoProject;