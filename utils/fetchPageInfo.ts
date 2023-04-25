import { PageInfo } from "../typings"

export const fetchPageInfo = async() => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );

    const data = await res.json();
    console.log("this is the data coming out: " + data);
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}