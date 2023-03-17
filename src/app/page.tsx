'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

import { userFetch } from "./services/axios";
import { Deaboard } from "./components/deashboard";
import { Modal } from "./components/modal";
import { CircularProgress } from "@mui/material";


//Validation before send datas
const schemaZod = z.object({
  name: z.string().min(1, { message: 'Required' }),
  linkedin_url: z.string().url({ message: "Invalid url" }),
  github_url: z.string().url({ message: "Invalid url" }),
});

type FormValue = z.infer<typeof schemaZod>;

export default function Home() {
  const [activeModal, setActiveModal] = useState(false);
  const [userDatas, setUserDatas] = useState<FormValue>()
  const [isLoding, setIsLoding] = useState(false)


  const { register, handleSubmit, formState: { errors } } = useForm<FormValue>({
    resolver: zodResolver(schemaZod),
  });

  //Creating register on DB
  async function createUser(datas: FormValue) {
    setIsLoding(!isLoding)
    let githubSplittedUser = datas.github_url.split('/')
    let slug = githubSplittedUser[3]

    userFetch.post('/create', {
      'name': datas.name,
      'linkedin_url': datas.linkedin_url,
      'github_url': datas.github_url,
      'slug': slug,

    }).then(res => {
      // after fetching open modal and send datas set State to send datas to modal
      setActiveModal(true)
      setUserDatas(datas)
      setIsLoding(false)

    }).catch(function (error) {
      //in case of error or same register sent
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.headers);
        alert('Já cadastrado!')

      } else {
        console.log('Error', error.message);
      }
    }).finally(() => {
      setIsLoding(false)
    })
  }
  
  return (
    <>
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 ">
        {
          !activeModal
            ? <Deaboard>
              <div className="h-full flex items-center justify-center ">
                {isLoding ? <CircularProgress />
                  : <form onSubmit={handleSubmit((datas) => createUser(datas))} className="max-w-[800px] flex flex-col gap-6 ">

                    <div className="border border-gray-300 flex">
                      <label htmlFor="name" className=" bg-gray-300 w-[20rem] py-3  text-center">Name </label>
                      <input type="text" {...register('name')} className="border-0 w-full  px-2" />
                    </div>
                    {errors.linkedin_url?.message && <p className="text-red-700">{errors.name?.message}</p>}

                    <div className="border border-gray-300 flex">
                      <label htmlFor="linkedin_url" className=" bg-gray-300 w-[20rem] py-3 text-center"> Linkedin URL </label>
                      <input type="text" {...register('linkedin_url')} className="border-0 w-full px-2" />
                    </div>
                    {errors.linkedin_url?.message && <p className="text-red-700">{errors.linkedin_url?.message}</p>}

                    <div className="border border-gray-300 flex">
                      <label htmlFor="github_url" className=" bg-gray-300 w-[20rem] py-3 text-center">Github URL</label>
                      <input type="text" {...register('github_url')} className="border-0 w-full px-2" />
                    </div>
                    {errors.github_url?.message && <p className="text-red-700">{errors.github_url.message}</p>}

                    <button className="px-4 py-3 bg-pink-700 text-white rounded mt-4 transition ease-in-out duration-300 hover:bg-pink-900"> Generate</button>
                  </form>
                }

              </div>
            </Deaboard>
            : <Modal isActive={activeModal} datas={userDatas} />
        }


      </div>
    </>

  )
}