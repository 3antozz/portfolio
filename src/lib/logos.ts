import ReactLogo from "@/../public/logos/react.svg"
import NodeLogo from "@/../public/logos/node.svg"
import PostgresLogo from "@/../public/logos/postgres.svg"
import ExressLogo from "@/../public/logos/express.svg"
import NextLogo from "@/../public/logos/next.svg"
import ViteLogo from "@/../public/logos/vite.svg"
import EjsLogo from "@/../public/logos/ejs.svg"
import PrismaLogo from "@/../public/logos/prisma.svg"
import TypeScriptLogo from "@/../public/logos/typescript.svg"
import GitLogo from "@/../public/logos/git.svg"
import VSCodeLogo from "@/../public/logos/vscode.svg"
import PostmanLogo from "@/../public/logos/postman.svg"
import TailwindLogo from "@/../public/logos/tailwind.svg"
import { Logo } from "./definitions"


const logos = {
    react: {
        title: 'React',
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
        title: 'Express',
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
    typeScript: {
        title: 'TypeScript',
        src: TypeScriptLogo,
        class: '',    
    },
    vscode: {
        title: 'VSCode',
        src: VSCodeLogo,
        class: '',    
    },
    git: {
        title: 'Git',
        src: GitLogo,
        class: '',    
    },
    postman: {
        title: 'Postman',
        src: PostmanLogo,
        class: '',    
    },
    tailwind: {
        title: 'TailwindCSS',
        src: TailwindLogo,
        class: '',    
    },
} as const satisfies Record<string, Logo>;

export default logos;