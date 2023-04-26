// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import { Project } from '@/typings'

type Data = {
  projects: Project[]
}

export const config = {
	runtime: 'edge',
}

export default async function handler(
  // req: NextApiRequest,
  // res: NextApiResponse<Data>
  req: NextRequest,
  res: NextResponse
) {
  const data: Response = await fetch(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/${process.env.NEXT_PUBLIC_DB_INFO}/projects`)
  const projects: Project[] = await data.json() 
  // res.status(200).json({ projects })
  return NextResponse.json({projects},{status: 200 })
}