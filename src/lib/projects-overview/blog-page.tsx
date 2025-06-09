import { ProjectOverview } from "../definitions";
import BlogImg from "@/../public/projects/blog-page/index.png"
import NodeLogo from "../logos/node";
import ExpressLogo from "../logos/express";
import PostgresLogo from "../logos/postgres";
import PrismaLogo from "../logos/prisma";
import ReactLogo from "../logos/react";



const BlogProject : ProjectOverview = {
        title: 'Blog Page',
        src: BlogImg,
        description: <>Full-stack blog application with <strong>Content Management System</strong> for authors.</>,
        features: [
            <><strong>Authentification</strong> via username & password.</>,
            <>Interaction with blogs via <strong>comments</strong>.</>,
            <>Separate <strong>Content Management System</strong> for authors.</>,
            <><strong>Rich text editor</strong> for authors.</>,
        ],
        route: '/projects/blog_page',
        stack: {
            backend: [NodeLogo, ExpressLogo, PostgresLogo, PrismaLogo],
            frontend: [ReactLogo]
        },
}

export default BlogProject;