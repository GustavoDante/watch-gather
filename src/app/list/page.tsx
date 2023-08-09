import { ListSection } from '@/sections/ListSection'

export default function ListPage() {
  // const language = 'pt-BR'

  return (
    <>
      <div className="bg-blue w-full">
        <h1 className="my-10 text-center  text-3xl font-bold">Minha lista</h1>
        <ListSection language="pt-BR" />
      </div>
    </>
  )
}
