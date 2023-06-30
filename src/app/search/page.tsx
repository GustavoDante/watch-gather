import { SearchSection } from '@/sections/SearchSection'

export default function SearchPage(params: {
  params: {}
  searchParams: { title: string }
}) {
  const language = 'pt-BR'
  const request = params

  if (!request || !request.searchParams || !request.searchParams.title) {
    return (
      <div className="mt-10 w-10/12">
        <h2 className="text-1 mb-1">Nenhum resultado encontrado</h2>
      </div>
    )
  }

  return (
    <>
      {/* @ts-expect-error */}
      <SearchSection language={language} title={params.searchParams.title} />
    </>
  )
}
