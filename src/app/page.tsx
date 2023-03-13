import { Deaboard } from "../components/deashboard";

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <Deaboard>
        <div className="h-full flex items-center justify-center ">
          <form action="" className="max-w-[800px] flex flex-col gap-6 ">
              <div className="border border-gray-300 flex">
                <label htmlFor="name" className=" bg-gray-300 w-[20rem] py-3  text-center">Name</label> <input type="text" className="border-0 w-full  px-2"/>
              </div>
              <div className="border border-gray-300 flex">
                <label htmlFor="name" className=" bg-gray-300 w-[20rem] py-3 text-center"> Linkedin URL </label> <input type="text" className="border-0 w-full px-2"/>
              </div>
              <div className="border border-gray-300 flex">
                <label htmlFor="name" className=" bg-gray-300 w-[20rem] py-3 text-center">Github URL</label> <input type="text" className="border-0 w-full px-2"/>
              </div>
              <button className="px-4 py-3 bg-pink-700 text-white rounded mt-4"> Generate</button>
          </form>
        </div>
      </Deaboard>
    </div>
  )
}
