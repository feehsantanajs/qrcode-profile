import {NextApiRequest, NextApiResponse} from 'next'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
export default async function search(req: NextApiRequest,res: NextApiResponse){

  const prisma = new PrismaClient()
  const {slug} = req.body
  
  try{ 
    const value = await prisma.user.findUnique({
      where:{
        slug:slug
      }
    })
    res.status(200).json(value)
  }catch(err){
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
}