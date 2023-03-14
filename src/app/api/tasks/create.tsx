
import { prisma } from '@/app/services/prisma'
import {NextApiRequest, NextApiResponse} from 'next'
export default async function create(req: NextApiRequest,res: NextApiResponse){

  const { name, linkedin_url, github_url} = req.body

  await prisma.user.create({
     data:{
      name: name,
      linkedin: linkedin_url,
      github:github_url
     }
  })

  return res.status(201).json({})
}