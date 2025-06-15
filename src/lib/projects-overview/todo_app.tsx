import { ProjectOverview } from "../definitions";
import TodoImg from "@/../public/projects/todo_app/interface.png"
import HTMLLogo from "../logos/html5";
import JavascriptLogo from "../logos/javascript";
import CSSLogo from "../logos/css3";



const TodoProject : ProjectOverview = {
        title: 'Todo-List App',
        src: TodoImg,
        description: <>Simple app for <strong>organizing & keeping track</strong> of your Todos for different projects using Vanilla JS.</>,
        features: [
            <><strong>Core features:</strong> Create, edit, group & delete tasks.</>,
            <><strong>Sort</strong> tasks by date & priority.</>,
            <><strong>Data persistence</strong> locally using LocaStorage.</>,
            <><strong>Responsive</strong> design & dark theme.</>,
        ],
        route: '/projects/todo_app',
        stack: {
            backend: [],
            frontend: [JavascriptLogo, HTMLLogo, CSSLogo]
        },
}

export default TodoProject;