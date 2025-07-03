import { ProjectOverview } from "../definitions";
import DropZoneImg from "@/../public/projects/dropzone/interface.png"
import NextLogo from "../logos/next";
import TailwindLogo from "../logos/tailwind";
import PostgresLogo from "../logos/postgres";
import PrismaLogo from "../logos/prisma";



const DropZoneProject : ProjectOverview = {
        title: 'DropZone',
        src: DropZoneImg,
        description: <>A modern <strong>Nextjs</strong> app designed to track, organize, and remember every location where you dropped packages or items using <strong>Google Maps API</strong>.</>  ,
        features: [
            <><strong>Secure Credentials</strong> login with <strong>NextAuth</strong> & optional <strong>Two-Factor Authentication (2FA)</strong>.</>,
            <><strong>Google Maps API</strong> integration to visualize all your dropoffs on an interactive map.</>,
            <>Location search <strong>autocomplete</strong>, current location with <strong>Geolocation API</strong>, <strong>Marker clustering</strong> for better visualization.</>,
            <>Search, edit, and manage your dropoff entries.</>,
        ],
        route: '/projects/dropzone',
        stack: {
            backend: [PostgresLogo, PrismaLogo],
            frontend: [NextLogo, TailwindLogo]
        },
}

export default DropZoneProject;