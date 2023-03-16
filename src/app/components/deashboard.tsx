import Link from 'next/link';
import {BsPencilSquare, BsSearch} from 'react-icons/bs'
import {SiNextdotjs, SiReact, SiTailwindcss, SiVercel} from 'react-icons/si'
import {AiFillHeart} from 'react-icons/ai'
import Image from 'next/image';


type Props = {
  children: string | JSX.Element | JSX.Element[];
}

export function Deaboard({ children }: Props) {
  return (
    <div className="grid grid-rows-layout m-10 p-6 max-w-[1160px] w-[100%] bg-purple-upt-500 rounded"  >
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3 ">
          <button className="w-4 h-4 bg-[#ED6A5E] rounded-full"></button>
          <button className="w-4 h-4 bg-[#F4BF4F] rounded-full"></button>
          <button className="w-4 h-4 bg-[#61C554] rounded-full"></button>
        </div>
        <span> QrCode Profile</span>
        <div className="w-14">&nbsp;</div>
      </header>
      <main className="grid grid-cols-principal max-h-full h-[50rem] py-8">
        <div className="max-h-full flex flex-col gap-10">
          <Link href="/"><BsPencilSquare size={25} className='text-pink-700 '/></Link>
          <Link href="/"><BsSearch size={25} className='transition ease-in-out duration-300'/></Link>
        </div>
        <div>
          {children}
        </div>
      </main>
      <footer className='flex justify-center items-center gap-4 '>
        <div className='flex items-center justify-center gap-1'>
          <p>Build with</p>
          <SiReact width={50} height={50} className='text-cyan-500' />
          <SiNextdotjs width={50} height={50} />
          <SiTailwindcss width={50} height={50} className='text-cyan-500' />
          <SiVercel width={50} height={50} className='text-black-700' />
        </div>
        <div className='flex items-center justify-center gap-1'>
          <p>& </p>
          <AiFillHeart width={50} height={50} className='text-red-700' />
          <p><Image src="/fs-logo-white.png" alt="Felipe Santana" width={12} height={12} className='bg-transparent'/></p>
        </div>
      </footer>
    </div>
  )
}