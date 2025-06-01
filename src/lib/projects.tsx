import { Project } from "./definitions"
import logos from "./logos"
import OdinBookImg from "@/../public/projects/odinbook/interface2.png"
import MessengerImg from "@/../public/projects/messaging-app/interface.png"
import WaldoImg from "@/../public/projects/where's-waldo/welcome.png"
import BlogImg from "@/../public/projects/blog-page/index.png"
import FileUploaderImg from "@/../public/projects/file-uploader/interface.png"
import Showcases from "./showcase"
const projects = {
    odinbook: {
        title: 'Social Media App',
        src: OdinBookImg,
        description: <>Full-stack <strong>Twitter</strong>-like social media application built for real-time content sharing and interaction.</>,
        brief: "This was one of the first full-stack projects I created, it's purpose was to tie everything I learned from The Odin Project's course together in a relatively complex project. Social media apps are among the most widely used applications on the web today.",
        features: [
            <><strong>Core features:</strong> profiles, posts, followage, likes & comments.</>,
            <><strong>Authentification</strong> with <strong>Github</strong> or username & password.</>,
            <><strong>Real time</strong> interaction updates & notifications.</>,
            <><strong>Image</strong> sharing capability.</>,
        ],
        route: '/projects/odinbook',
        demo: 'https://odinbook-beta.vercel.app',
        github: 'https://github.com/3antozz/Odin-Book',
        stack: {
            backend: [logos.node, logos.express, logos.postgres, logos.prisma],
            frontend: [logos.react]
        },
        showcase: Showcases.odinbook
    },
    messaging_app: {
        title: 'Messenger App',
        src: MessengerImg,
        description: <>Full-stack messenger application designed to provide seamless messaging communication.</>,
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
            backend: [logos.node, logos.express, logos.postgres, logos.prisma],
            frontend: [logos.react, logos.vite]
        },
        showcase: Showcases.messaging_app
    },
    where_is_waldo: {
        title: 'Where is Waldo ?',
        src: WaldoImg,
        description: <>Full-stack <strong>Photo Tagging</strong> game where your goal is to find all the hidden characters as fast as possible.</>,
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
            backend: [logos.node, logos.express, logos.postgres, logos.prisma],
            frontend: [logos.react]
        },
        showcase: Showcases.where_is_waldo
    },
    blog_page: {
        title: 'Blog Page',
        src: BlogImg,
        description: <>Full-stack blog application with <strong>Content Management System</strong> for authors.</>,
        brief: "This is my first full-stack project, it's purpose was to tie everything I learned together in a fun project. It's a Simple Blog app with a Backend API and 2 separate frontends, first is for visitors, second is for authors, to create and edit posts and comments. you need to be an admin to login as author, use the following account: username: 3antozz, password: 123456",
        features: [
            <><strong>Authentification</strong> via username & password.</>,
            <>Interaction with blogs via <strong>comments</strong>.</>,
            <>Separate <strong>Content Management System</strong> for authors.</>,
            <><strong>Rich text editor</strong> for authors.</>,
        ],
        route: '/projects/blog_page',
        demo: 'https://blog-page-3antozz.vercel.app',
        github: 'https://github.com/3antozz/Blog-Page',
        stack: {
            backend: [logos.node, logos.express, logos.postgres, logos.prisma],
            frontend: [logos.react]
        },
        showcase: Showcases.blog_page
    },
    file_uploader: {
        title: 'File Uploader',
        src: FileUploaderImg,
        description: <><strong>Google drive</strong>-like cloud storage application created with ExpressJS and EJS.</>,
        brief: "This was a project assignment from The Odin Project's Node course. The brief was to create a stripped down version of Google Drive using Express and the templating engine EJS.",
        features: [
            <><strong>Authentification</strong> via username & password.</>,
            <>Folder and file <strong>management</strong>.</>,
            <>Files <strong>upload</strong> and download.</>,
            <>Public folder <strong>sharing</strong> with <strong>expiration</strong> period.</>,
        ],
        route: '/projects/file_uploader',
        demo: 'https://file-uploader-ifat.onrender.com',
        github: 'https://github.com/3antozz/File-Uploader',
        stack: {
            backend: [logos.node, logos.express, logos.postgres, logos.prisma],
            frontend: [logos.ejs]
        },
        showcase: Showcases.file_uploader
    },
} as const satisfies Record<string, Project>;

export default projects;