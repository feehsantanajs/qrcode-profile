import { Deaboard } from "../components/deashboard";

interface UserProps {
  params: {
    slug: string;
  }
}

export default function User({ params }: UserProps) {
  return(
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-300   ">
      <Deaboard>
        <h1>Nome: {params.slug}</h1>
      </Deaboard>
    </div>
  )


}