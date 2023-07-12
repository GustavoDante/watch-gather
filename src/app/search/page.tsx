'use client'
 
import { useSearchParams } from 'next/navigation'
import { SearchSection } from '@/sections/SearchSection'
import { Suspense } from 'react'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const language = 'pt-BR'
 
  const search = searchParams.get('title')

  function SearchBarFallback() {
    return (
      <div className="mt-10 w-10/12">
        <h2 className="text-1 mb-1">Nenhum resultado encontrado</h2>
      </div>
    )
  }

  return (
    <>
     <Suspense fallback={<SearchBarFallback />}>
        {/* @ts-expect-error */}
        <SearchSection language={language} title={search} />
     </Suspense>
      
    </>
  )
}
