'use client'
import { useEffect, useState } from "react";
import Image from 'next/image'

import { Deaboard } from "../components/deashboard";
import { gitHubApi, userFetch } from "../services/axios";
import { LinearProgress } from "@mui/material";

interface UserProps {
  params: {
    slug: string;
  }
}

interface findDatasProps{
  id?:number;
  name?:string;
  linkedin?:string;
  github?:string;
  slug?:string;
  createdAt?: string;
}

interface githubDatasProps{
  bio:string;
}

export default function User({ params }: UserProps) {

  const [datasGithub, setDatasGithub] = useState<githubDatasProps>()
  const [findDatas, setFindDatas] = useState<findDatasProps | undefined>()
  const [isLoading, setIsLoding] = useState(true)
  
  // Verification if exist user register in DB
  useEffect(()=>{
    try {
        userFetch.post('/search', {
        slug: params.slug, 
      })
      .then(res => setFindDatas(res.data))
      .finally(()=>{
        setIsLoding(false)
      })
    } catch (error) {
      console.error(error);
      setIsLoding(false)
    }

  }, [] )

  //Loading datas GithubApi Public
  useEffect(()=>{
    try {
      gitHubApi.get(`/${params.slug}`)
      .then(res => setDatasGithub(res.data))
    } 
    catch (error) {
      console.error(error);
      setIsLoding(false)
    }
  }, [findDatas])

console.log(datasGithub)
  return(
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-300">
      <Deaboard>

        {isLoading
        ? <LinearProgress />
        : findDatas ? 
          <div className=" p-10 flex flex-col items-start justify-center lg:items-center" key={findDatas.id}>
    
            <h1 className="mt-10 text-3xl">Hello, my name is {findDatas.name} </h1>

            {datasGithub
            ? <div className="flex flex-col items-center justify-center gap-6 max-w-[100%] mt-10 lg:flex-row lg:max-w-[50%]">

                <Image src={`https://github.com/${params.slug}.png`} alt="" width={200} height={200} style={{borderRadius:20}} />
                <div className="">
                  <h2 className="text-3xl font-bold">My History</h2>
                  <p>{datasGithub.bio}</p>
                </div>
              </div>
            : <p className="text-4xl text-red-500">To know more about me you would need a github link valid.</p>
            }

            <div className="flex gap-4 mt-20 ">
              <a href={findDatas.linkedin} className=" bg-blue-700 px-4 py-2 text-white rounded-md transition ease-in-out duration-300 hover:bg-blue-900">Linkedin</a>
              <a href={findDatas.github} className="bg-gray-500 px-4 py-2 text-white rounded-md transition ease-in-out duration-300 hover:bg-gray-800">Github</a>
            </div>
          </div>
          
        : <div className=" p-10">
            <p className="text-4xl text-red-500">This register no exist, return to create!</p>
          </div>
        }

      </Deaboard>
    </div>
  )


}