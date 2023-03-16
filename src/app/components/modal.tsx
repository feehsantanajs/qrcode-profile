import Link from 'next/link';
import { motion } from "framer-motion";
import {QRCodeSVG} from 'qrcode.react';


interface DatasProps{
    name: string,
    linkedin_url:string,
    github_url:string
}
interface ModalProps {
  isActive:boolean ;
  datas:DatasProps | undefined;
}

export function Modal({isActive,datas}:ModalProps) {

  // Separeting peaces of varibles to use  
  const nameSplitted = datas?.name.split(" ");
  const githubSplitted = datas?.github_url.split('/')
  
  if(isActive && nameSplitted !== undefined){
    return (
      <motion.div 
      className='max-w-[30rem] w-[100%] h-[45rem]  bg-white rounded-[2rem] p-5'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8 ,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      >
        <header className='h-2 flex items-center justify-center gap-2'>
          <div className='border w-4 h-4 rounded-full bg-gray-400'></div>
          <div className='border w-16 h-4 rounded-full bg-gray-400'></div>
          <div className='border w-4 h-4 rounded-full bg-gray-400'></div>
        </header>
        <main className='flex flex-col  gap-10 items-center justify-center h-[80%] border border-gray-300 mt-10 text-black p-4'>
            <h1 className='text-5xl text-center'> {nameSplitted?.[0]}</h1>
            <p className=''>Scan me</p>
            <QRCodeSVG value={`http://127.0.0.1:3000/${githubSplitted?.[3]}`} />,
        </main>
        <footer>
          <div className='border w-4 h-4 rounded-full bg-gray-400'></div>
        </footer>
      </motion.div>
    )
  }else{
    return (
    <></>
    )
  }
}