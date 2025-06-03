import { Project } from "../definitions";
import FileUploaderImg from "@/../public/projects/file-uploader/interface.png"
import NodeLogo from "../logos/node";
import ExpressLogo from "../logos/express";
import PostgresLogo from "../logos/postgres";
import PrismaLogo from "../logos/prisma";
import EjsLogo from "../logos/ejs";
import showcase from "../showcases/file-uploader";



const FileUploaderProject : Project = {
        title: 'File Uploader',
        src: FileUploaderImg,
        description: <><strong>Google drive</strong>-like cloud storage application created with ExpressJS and EJS.</>,
        text_description: 'Google drive-like cloud storage application created with ExpressJS and EJS.',
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
            backend: [NodeLogo, ExpressLogo, PostgresLogo, PrismaLogo],
            frontend: [EjsLogo]
        },
        showcase: showcase
}

export default FileUploaderProject;