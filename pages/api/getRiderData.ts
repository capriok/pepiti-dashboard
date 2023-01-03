import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   const { guid } = req.query
   const response = await fetch(`https://pepiti.com/stats/api/v0/rider/${guid}`)

   const data = await response.json()
   res.status(200).json(data)
}
