// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Project } from '@/typings'

type Data = {
  projects: Project[]
}

// export const config = {
// 	runtime: 'edge',
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: Response = await fetch(`${process.env.NEXT_DB_BASE_URL}/${process.env.NEXT_DB_INFO}/projects`)
  const projects: Project[] = await data.json() 
  res.status(200).json({ projects })
}