import { Project } from "../typings"
import Projects from '@/json/projects.json'

export const fetchProjects = async() => {
    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
    // );
    // const res = await fetch('/api/getProjects');

    // const data = await res.json();
    // const projects: Project[] = data.projects;

    return Projects;
}