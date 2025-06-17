import { Project } from "../definitions";
import BlogImg from "@/../public/projects/blog-page/index.png"
import NodeLogo from "../logos/node";
import ExpressLogo from "../logos/express";
import PostgresLogo from "../logos/postgres";
import PrismaLogo from "../logos/prisma";
import ReactLogo from "../logos/react";
import showcase from "../showcases/blog-page";



const BlogProject : Project = {
        title: 'Blog Page',
        src: BlogImg,
        description: <>Full-stack blog application with <strong>Content Management System</strong> for authors.</>,
        text_description: 'Full-stack blog application with Content Management System for authors.',
        brief: "This is my first full-stack project, it's purpose was to tie everything I learned together in a fun project. It's a Simple Blog app with a Backend API and 2 separate frontends, first is for visitors, second is for authors, to create and edit posts and comments. you need to be an admin to login as author, use the following account: username: 3antozz, password: 123456",
        features: [
            <><strong>Authentication</strong> via username & password.</>,
            <>Interaction with blogs via <strong>comments</strong>.</>,
            <>Separate <strong>Content Management System</strong> for authors.</>,
            <><strong>Rich text editor</strong> for authors.</>,
        ],
        route: '/projects/blog_page',
        demo: 'https://blog-page-3antozz.vercel.app',
        github: 'https://github.com/3antozz/Blog-Page',
        stack: {
            backend: [NodeLogo, ExpressLogo, PostgresLogo, PrismaLogo],
            frontend: [ReactLogo]
        },
        showcase: showcase
}

export default BlogProject;