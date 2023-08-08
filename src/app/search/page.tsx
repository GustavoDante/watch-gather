import { SearchSection } from '@/sections/SearchSection'

export default function SearchPage() {
  const language = 'pt-BR'

  return (
    <>
      {/* @ts-expect-error */}
      <SearchSection language={language} />
    </>
  )
}
