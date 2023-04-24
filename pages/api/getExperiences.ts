// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Experience } from '@/typings'
import Experiences from '@/json/experiences.json'

type Data = {
  experiences: Experience[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = Experiences 
  res.status(200).json({ experiences })
}
