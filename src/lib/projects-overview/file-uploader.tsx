import { ProjectOverview } from "../definitions";
import FileUploaderImg from "@/../public/projects/file-uploader/interface.png"
import NodeLogo from "../logos/node";
import ExpressLogo from "../logos/express";
import PostgresLogo from "../logos/postgres";
import PrismaLogo from "../logos/prisma";
import EjsLogo from "../logos/ejs";



const FileUploaderProject : ProjectOverview = {
        title: 'File Uploader',
        src: FileUploaderImg,
        description: <><strong>Google drive</strong>-like cloud storage application created with ExpressJS and EJS.</>,
        features: [
            <><strong>Authentification</strong> via username & password.</>,
            <>Folder and file <strong>management</strong>.</>,
            <>Files <strong>upload</strong> and download.</>,
            <>Public folder <strong>sharing</strong> with <strong>expiration</strong> period.</>,
        ],
        route: '/projects/file_uploader',
        stack: {
            backend: [NodeLogo, ExpressLogo, PostgresLogo, PrismaLogo],
            frontend: [EjsLogo]
        },
}

export default FileUploaderProject;