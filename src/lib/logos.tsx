import ReactLogo from "@/../public/logos/react.svg"
import NodeLogo from "@/../public/logos/node.svg"
import PostgresLogo from "@/../public/logos/postgres.svg"
import ExressLogo from "@/../public/logos/express.svg"
import NextLogo from "@/../public/logos/next.svg"
import ViteLogo from "@/../public/logos/vite.svg"
import EjsLogo from "@/../public/logos/ejs.svg"
import PrismaLogo from "@/../public/logos/prisma.svg"
import { Logo } from "./definitions"


const logos: Record<string, Logo> = {
    react: {
        title: 'ReactJS',
        src: ReactLogo,
        class: '',
    },
    node: {
        title: 'NodeJS',
        src: NodeLogo,
        class: '',
    },
    postgres: {
        title: 'PostgreSQL',
        src: PostgresLogo,
        class: '',
    },
    express: {
        title: 'ExpressJS',
        src: ExressLogo,
        class: 'express',
    },
    next: {
        title: 'NextJS',
        src: NextLogo,
        class: 'next',
    },
    vite: {
        title: 'Vite',
        src: ViteLogo,
        class: '',
    },
    ejs: {
        title: 'EJS',
        src: EjsLogo,
        class: '',
    },
    prisma: {
        title: 'Prisma',
        src: PrismaLogo,
        class: 'prisma',
    },
}

export default logos;