import { ProjectOverview } from "../definitions";
import BattleshipImg from "@/../public/projects/battleship/interface.png"
import HTMLLogo from "../logos/html5";
import JavascriptLogo from "../logos/javascript";
import CSSLogo from "../logos/css3";



const BattleshipProject : ProjectOverview  = {
        title: 'Battleship',
        src: BattleshipImg,
        description: <>Classic single player Battleship game where the player tries to sink all of the computer&apos;s ships.</>,
        features: [
            <><strong>Interactive drag-and-drop</strong> ship placement on the grid.</>,
            <><strong>Dynamic UI</strong> showing player boards and status..</>,
            <><strong>Polished AI</strong> that plays similarly to humans.</>,
        ],
        route: '/projects/battleship',
        stack: {
            backend: [],
            frontend: [JavascriptLogo, HTMLLogo, CSSLogo]
        },
}

export default BattleshipProject;