// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import { PageInfo } from '@/typings'

type Data = {
  pageInfo: PageInfo
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
  const data: Response = await fetch(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/${process.env.NEXT_PUBLIC_DB_INFO}/pageInfo`)
  const pageInfo: PageInfo = await data.json()
  // res.status(200).json({ pageInfo })
  return NextResponse.json({pageInfo},{status: 200 })
}