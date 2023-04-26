import { Skill } from "../typings"

export const fetchSkills = async() => {
    const res = await fetch(
        // `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
        `${process.env.NEXT_DB_BASE_URL}/${process.env.NEXT_DB_INFO}/skills`                
    );

    const data = await res.json();
    // const skills: Skill[] = data.skills;
    const skills: Skill[] = data;

    return skills;
}