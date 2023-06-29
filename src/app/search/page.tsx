'use client'

import { SearchSection } from '@/sections/SearchSection'
import { useSearchParams } from 'next/navigation'

export default async function SearchPage() {
  const language = 'pt-BR'
  const searchParams = useSearchParams()
  const title = searchParams.get('title') // get the param from the URL
  console.log(title)
  return (
    <>
      {/* @ts-expect-error */}
      <SearchSection language={language} title={'teste'} />
    </>
  )
}
