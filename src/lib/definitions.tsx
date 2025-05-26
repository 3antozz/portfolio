import { StaticImageData } from "next/image"
import { ReactNode } from "react"
export interface Logo {
    title: string,
    src: StaticImageData,
    class: string
}

export interface Project {
    title: string, 
    src: StaticImageData,
    description: ReactNode, 
    features: ReactNode[], 
    stack: Logo[], 
    link: string
}
