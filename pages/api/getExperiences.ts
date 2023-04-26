// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import { Experience } from '@/typings'

type Data = {
  experiences: Experience[]
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
  const data: Response = await fetch(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/${process.env.NEXT_PUBLIC_DB_INFO}/experiences`)
  const experiences: Experience[] = await data.json()
  // res.status(200).json({ experiences })
  return NextResponse.json({experiences},{status: 200 })
}