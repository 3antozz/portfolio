import { Project } from "../definitions";
import BattleshipImg from "@/../public/projects/battleship/interface.png"
import HTMLLogo from "../logos/html5";
import JavascriptLogo from "../logos/javascript";
import CSSLogo from "../logos/css3";
import showcase from "../showcases/battleship";



const BattleshipProject : Project = {
        title: 'Battleship',
        src: BattleshipImg,
        description: <>Classic single player Battleship game where the player tries to sink all of the computer&apos;s ships.</>,
        text_description: "Classic single player Battleship game where the player tries to sink all of the computer's ships.",
        brief: "This was a project assignment from The Odin Project's Javascript course. The intention was to practice the basics of Test Driven Development.",
        features: [
            <><strong>Interactive drag-and-drop</strong> ship placement on the grid.</>,
            <><strong>Dynamic UI</strong> showing player boards and status..</>,
            <><strong>Polished AI</strong> that plays similarly to humans.</>,
        ],
        route: '/projects/battleship',
        demo: 'https://3antozz.github.io/Battleship/',
        github: 'https://github.com/3antozz/Battleship',
        stack: {
            backend: [],
            frontend: [JavascriptLogo, HTMLLogo, CSSLogo]
        },
        showcase: showcase
}

export default BattleshipProject;