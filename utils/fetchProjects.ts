import { Project } from "../typings"

export const fetchProjects = async() => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
        // `${process.env.NEXT_DB_BASE_URL}/${process.env.NEXT_DB_INFO}/projects`
    );

    const data = await res.json();
    const projects: Project[] = data.projects
    // const projects: Project[] = data

    return projects;
}