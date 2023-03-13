import Link from 'next/link';
import {BsPencilSquare, BsSearch} from 'react-icons/bs'

type Props = {
  children: string | JSX.Element | JSX.Element[];
}

export function Deaboard({ children }: Props) {
  return (
    <div className="grid grid-rows-layout m-10 p-6 max-w-[1280px] w-[100%] bg-purple-upt-500 rounded"  >
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
          <Link href="/"><BsPencilSquare size={25}/></Link>
          <Link href="/search"><BsSearch size={25}/></Link>
        </div>
        <div>
          {children}
        </div>
      </main>
      <footer> Footer</footer>
    </div>
  )
}