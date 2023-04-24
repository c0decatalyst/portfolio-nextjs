import { Social } from "../typings"
import Socials from '@/json/socials.json'

export const fetchSocials = async() => {
    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
    // );
    const res = await fetch('/api/getSocials');

    const data = await res.json();
    const socials: Social[] = data.socials;

    return Socials;
}