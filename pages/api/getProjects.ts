// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Project } from '@/typings'
import Projects from '@/json/projects.json'

type Data = {
  projects: Project[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = Projects 
  res.status(200).json({ projects })
}
