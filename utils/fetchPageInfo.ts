import { PageInfo } from "../typings"
import pageInfoJson from '@/json/pageInfo.json'

export const fetchPageInfo = async() => {
    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    // );
    const res = await fetch('/api/getPageInfo');

    const data = await res.json();
    const PageInfo: PageInfo = data.pageInfo;

    return pageInfoJson;
}