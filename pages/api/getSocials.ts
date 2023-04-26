// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Social } from '@/typings'

type Data = {
  socials: Social[]
}

export const config = {
	runtime: 'edge',
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: Response = await fetch(`${process.env.NEXT_DB_BASE_URL}/${process.env.NEXT_DB_INFO}/socials`)
  const socials: Social[] = await data.json() 
  res.status(200).json({ socials })
}
