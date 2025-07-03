import { Project } from "../definitions";
import DropZoneImg from "@/../public/projects/dropzone/interface.png"
import NextLogo from "../logos/next";
import TailwindLogo from "../logos/tailwind";
import PostgresLogo from "../logos/postgres";
import PrismaLogo from "../logos/prisma";
import showcase from "@/lib/showcases/dropzone";



const DropZoneProject : Project = {
        title: 'DropZone',
        src: DropZoneImg,
        description: <>A modern <strong>Nextjs</strong> app designed to track, organize, and remember every location where you dropped packages or items using <strong>Google Maps API</strong>.</>  ,
        text_description: 'A modern Nextjs app designed to track, organize, and remember every location where you drop packages or items.',
        brief: "DropZone was created as a full-stack Nextjs practice project to explore real-world implementations of Two-Factor Authentication (2FA) and Google Maps API integration.",
        features: [
            <><strong>Secure Credentials</strong> login with <strong>NextAuth</strong> & optional <strong>Two-Factor Authentication (2FA)</strong>.</>,
            <><strong>Google Maps API</strong> integration to visualize all your dropoffs on an interactive map.</>,
            <>Location search <strong>autocomplete</strong>, current location with <strong>Geolocation API</strong>, <strong>Marker clustering</strong> for better visualization.</>,
            <>Search, edit, and manage your dropoff entries.</>,
        ],
        route: '/projects/dropzone',
        demo: 'https://dropzone-delta.vercel.app/dashboard',
        github: 'https://github.com/3antozz/dropzone',
        stack: {
            backend: [PostgresLogo, PrismaLogo],
            frontend: [NextLogo, TailwindLogo]
        },
        showcase: showcase
}

export default DropZoneProject;