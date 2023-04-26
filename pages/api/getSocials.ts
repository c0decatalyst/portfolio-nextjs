// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import { Social } from '@/typings'

type Data = {
  socials: Social[]
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
  const data: Response = await fetch(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/${process.env.NEXT_PUBLIC_DB_INFO}/socials`)
  const socials: Social[] = await data.json() 
  // res.status(200).json({ socials })

  return NextResponse.json({socials},{status: 200 })
}
