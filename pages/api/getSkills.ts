// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Skill } from '@/typings'
import Skills from '@/json/skills.json'

type Data = {
  skills: Skill[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skill[] = Skills 
  res.status(200).json({ skills })
}

export const config = {
	runtime: 'experimental-edge',
}