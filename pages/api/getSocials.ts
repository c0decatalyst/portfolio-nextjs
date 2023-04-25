// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Social } from '@/typings'
import Socials from '@/json/socials.json'

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
  const socials: Social[] = Socials 
  res.status(200).json({ socials })
}
