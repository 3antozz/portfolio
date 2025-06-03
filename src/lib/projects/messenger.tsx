import { Project } from "../definitions";
import MessengerImg from "@/../public/projects/messaging-app/interface.png"
import NodeLogo from "../logos/node";
import ExpressLogo from "../logos/express";
import PostgresLogo from "../logos/postgres";
import PrismaLogo from "../logos/prisma";
import ReactLogo from "../logos/react";
import showcase from "../showcases/messenger";



const MessengerProject : Project = {
        title: 'Messenger App',
        src: MessengerImg,
        description: <>Full-stack messenger application designed to provide seamless messaging communication.</>,
        text_description: 'Full-stack messenger application designed to provide seamless messaging communication.',
        brief: "This was one of the first full-stack projects I created, it's purpose was to tie everything I learned from The Odin Project's course together in a relatively complex project. A messaging app is a common application on the web.",
        features: [
            <><strong>Real time</strong> messaging.</>,
            <><strong>Authentification</strong> with <strong>refresh/access</strong> cookie based jwt tokens.</>,
            <><strong>Group</strong> creation and <strong>management</strong>.</>,
            <><strong>Image</strong> sharing capability.</>,
            <>Users live <strong>online status.</strong></>,
        ],
        route: '/projects/messaging_app',
        demo: 'https://messaging-app-blue-chi.vercel.app',
        github: 'https://github.com/3antozz/Messaging-app',
        stack: {
            backend: [NodeLogo, ExpressLogo, PostgresLogo, PrismaLogo],
            frontend: [ReactLogo]
        },
        showcase: showcase
}

export default MessengerProject;