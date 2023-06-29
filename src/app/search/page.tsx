'use client'

import { SearchSection } from '@/sections/SearchSection'
import { useParams } from 'next/navigation'

export default async function SearchPage() {
  const language = 'pt-BR'
  const params = useParams()

  console.log(params)
  return (
    <>
      {/* @ts-expect-error */}
      <SearchSection language={language} title={'adsa'} />
    </>
  )
}
