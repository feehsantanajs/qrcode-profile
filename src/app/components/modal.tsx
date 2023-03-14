import Link from 'next/link';
import { motion } from "framer-motion";
import {QRCodeSVG} from 'qrcode.react';
interface ModalProps {
  isActive:boolean ;
  arrayDatas?:string[] | undefined
}

export function Modal({isActive,arrayDatas}:ModalProps) {

  const name = arrayDatas[0].substring(0, arrayDatas[0].indexOf(' '))
  const userLinkedin = arrayDatas[1].substring(30)
  
  if(isActive){
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
            <h1 className='text-5xl text-center'> {name}</h1>
            <p className=''>Scan me</p>
            <QRCodeSVG value={`http://127.0.0.1:3000/${userLinkedin}`} />,
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