// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PageInfo } from '@/typings'
import pageInfoJson from '@/json/pageInfo.json'

type Data = {
  pageInfo: string
}

// export const config = {
// 	runtime: 'edge',
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = pageInfoJson 
  res.status(200).json({ pageInfo:"kkj" })
}