// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import { Skill } from '@/typings'

type Data = {
  skills: Skill[]
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
  const data: Response = await fetch(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/${process.env.NEXT_PUBLIC_DB_INFO}/skills`)
  const skills: Skill[] = await data.json() 
  // res.status(200).json({ skills })
  return NextResponse.json({skills},{status: 200 })
}