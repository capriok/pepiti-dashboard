import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   const { search } = req.query
   const response = await fetch(`https://pepiti.com/stats/api/v0/rider/search/${search}`)

   const data = await response.json()
   res.status(200).json(data)
}
