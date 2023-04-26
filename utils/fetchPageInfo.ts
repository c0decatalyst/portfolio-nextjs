import { PageInfo } from "../typings"

export const fetchPageInfo = async() => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
        // `${process.env.NEXT_DB_BASE_URL}/${process.env.NEXT_DB_INFO}/pageInfo`
    );

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo
    // const pageInfo: PageInfo = data

    return pageInfo;
}