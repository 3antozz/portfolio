import { ProjectOverview } from "../definitions";
import MessengerImg from "@/../public/projects/messaging-app/interface.png"
import NodeLogo from "../logos/node";
import ExpressLogo from "../logos/express";
import PostgresLogo from "../logos/postgres";
import PrismaLogo from "../logos/prisma";
import ReactLogo from "../logos/react";



const MessengerProject : ProjectOverview = {
        title: 'Messenger App',
        src: MessengerImg,
        description: <>Full-stack messenger application designed to provide seamless messaging communication.</>,
        features: [
            <><strong>Real time</strong> messaging.</>,
            <><strong>Authentification</strong> with <strong>refresh/access</strong> cookie based jwt tokens.</>,
            <><strong>Group</strong> creation and <strong>management</strong>.</>,
            <><strong>Image</strong> sharing capability.</>,
            <>Users live <strong>online status.</strong></>,
        ],
        route: '/projects/messaging_app',
        stack: {
            backend: [NodeLogo, ExpressLogo, PostgresLogo, PrismaLogo],
            frontend: [ReactLogo]
        },
}

export default MessengerProject;