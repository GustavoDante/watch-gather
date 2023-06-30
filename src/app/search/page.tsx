import { SearchSection } from '@/sections/SearchSection'

export default function SearchPage(params: {
  params: {}
  searchParams: { title: string }
}) {
  const language = 'pt-BR'

  return (
    <>
      {/* @ts-expect-error */}
      <SearchSection language={language} title={params.searchParams.title} />
    </>
  )
}
