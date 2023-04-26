// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PageInfo } from '@/typings'

type Data = {
  pageInfo: PageInfo
}

export const config = {
	runtime: 'edge',
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: Response = await fetch(`${process.env.NEXT_DB_BASE_URL}/${process.env.NEXT_DB_INFO}/pageInfo`)
  const pageInfo: PageInfo = await data.json()

  res.status(200).json({ pageInfo })
}