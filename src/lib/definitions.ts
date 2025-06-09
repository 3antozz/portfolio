import { StaticImageData } from "next/image"
import { ReactNode } from "react"
export interface Logo {
    title: string,
    src: StaticImageData,
    class: string
}

export type Stack = {
    backend: Logo[],
    frontend: Logo[]
};

export type GeneralStack = {
    techs: Logo[],
    tools: Logo[],
    learning: Logo[]
}

export interface Project {
    title: string, 
    src: StaticImageData,
    description: ReactNode,
    text_description: string,
    brief: string, 
    features: ReactNode[], 
    stack: Stack, 
    route: string,
    demo: string,
    github: string,
    showcase: Showcase[]
}

export interface LatestProject {
    title: string, 
    src: StaticImageData,
    description: ReactNode,
    features: ReactNode[], 
    stack: Stack, 
    route: string,
}

export interface Showcase {
    title: string,
    image: StaticImageData
}
