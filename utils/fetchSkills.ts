import { Skill } from "../typings"
import Skills from '@/json/skills.json'

export const fetchSkills = async() => {
    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
    // );
    const res = await fetch('/api/getSkills');

    const data = await res.json();
    const skills: Skill[] = data.skills;

    return Skills;
}