import { StaticImageData } from "next/image"
import { ReactNode } from "react"
export interface Logo {
    title: string,
    src: StaticImageData,
    class: string
}

export type stack = {
    backend: Logo[],
    frontend: Logo[]
};

export interface Project {
    title: string, 
    src: StaticImageData,
    description: ReactNode,
    brief: string, 
    features: ReactNode[], 
    stack: stack, 
    route: string,
    demo: string,
    github: string,
    showcase: Showcase[]
}

export interface Showcase {
    title: string,
    image: StaticImageData
}
