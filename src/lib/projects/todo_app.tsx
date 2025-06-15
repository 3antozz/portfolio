import { Project } from "../definitions";
import TodoImg from "@/../public/projects/todo_app/interface.png"
import HTMLLogo from "../logos/html5";
import JavascriptLogo from "../logos/javascript";
import CSSLogo from "../logos/css3";
import showcase from "../showcases/todo_app";



const TodoProject : Project = {
        title: 'Todo-List App',
        src: TodoImg,
        description: <>Simple app for <strong>organizing & keeping track</strong> of your Todos for different projects using Vanilla JS.</>,
        text_description: "Simple app for organizing & keeping track of your Todos for different projects.",
        brief: "This was a project assignment from The Odin Project's Javascript course. The intention of this was to practice organizing javascript code with modules, classes, OOP principles....",
        features: [
            <><strong>Core features:</strong> Create, edit, group & delete tasks.</>,
            <><strong>Sort</strong> tasks by date & priority.</>,
            <><strong>Data persistence</strong> locally using LocaStorage.</>,
            <><strong>Responsive</strong> design & dark theme.</>,
        ],
        route: '/projects/todo_app',
        demo: 'https://3antozz.github.io/Todo-List/',
        github: 'https://github.com/3antozz/Todo-List',
        stack: {
            backend: [],
            frontend: [JavascriptLogo, HTMLLogo, CSSLogo]
        },
        showcase: showcase
}

export default TodoProject;