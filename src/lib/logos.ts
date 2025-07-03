import ReactLogo from "@/lib/logos/react"
import NodeLogo from "@/lib/logos/node"
import PostgresLogo from "@/lib/logos/postgres"
import ExpressLogo from "@/lib/logos/express"
import NextLogo from "@/lib/logos/next"
import ViteLogo from "@/lib/logos/vite"
import EjsLogo from "@/lib/logos/ejs"
import PrismaLogo from "@/lib/logos/prisma"
import TypeScriptLogo from "@/lib/logos/typescript"
import GitLogo from "@/lib/logos/git"
import VSCodeLogo from "@/lib/logos/vscode"
import PostmanLogo from "@/lib/logos/postman"
import TailwindLogo from "@/lib/logos/tailwind"
import ZustandLogo from "@/lib/logos/zustand"
import DockerLogo from "@/lib/logos/docker"
import WebpackLogo from "@/lib/logos/webpack"
import RedisLogo from "@/lib/logos/redis"
import TanstackLogo from "@/lib/logos/tanstack"
import MongoDBLogo from "@/lib/logos/mongodb"
import { Logo } from "./definitions"


const logos = {
    react: ReactLogo,
    node: NodeLogo,
    postgres: PostgresLogo,
    express: ExpressLogo,
    next: NextLogo,
    vite: ViteLogo,
    ejs: EjsLogo,
    prisma: PrismaLogo,
    typeScript: TypeScriptLogo,
    vscode: VSCodeLogo,
    git: GitLogo,
    postman: PostmanLogo,
    tailwind: TailwindLogo,
    zustand: ZustandLogo,
    docker: DockerLogo,
    webpack: WebpackLogo,
    redis: RedisLogo,
    tanstack: TanstackLogo,
    mongodb: MongoDBLogo
} as const satisfies Record<string, Logo>;

export default logos;