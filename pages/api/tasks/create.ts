import {NextApiRequest, NextApiResponse} from 'next'
import { PrismaClient } from '@prisma/client'

export default async function create(req: NextApiRequest,res: NextApiResponse){
  const prisma = new PrismaClient()
  
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