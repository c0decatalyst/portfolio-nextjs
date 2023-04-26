import { Social } from "../typings"

export const fetchSocials = async() => {
    const res = await fetch(
        // `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
        `${process.env.NEXT_DB_BASE_URL}/${process.env.NEXT_DB_INFO}/socials`
    );

    const data = await res.json();
    // const socials: Social[] = data.socials;
    const socials: Social[] = data;

    return socials;
}
export const config = {
	runtime: 'experimental-edge',
}