'use client'

import { SearchSection } from '@/sections/SearchSection'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function SearchPage() {
  const language = 'pt-BR'

  const searchParams = useSearchParams()
  // const title = searchParams.get('title')

  useEffect(() => {
    console.log(searchParams)
  }, [searchParams])

  return (
    <>
      {/* @ts-expect-error */}
      <SearchSection language={language} title={'title'} />
    </>
  )
}
