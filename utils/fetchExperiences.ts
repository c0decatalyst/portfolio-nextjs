import { Experience } from "../typings"

export const fetchExperiences = async() => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`
        // `${process.env.NEXT_DB_BASE_URL}/${process.env.NEXT_DB_EXP}/experiences`
    )

    const data = await res.json()
    const experiences: Experience[] = data.experiences
    // const experiences: Experience[] = data

    return experiences;
}