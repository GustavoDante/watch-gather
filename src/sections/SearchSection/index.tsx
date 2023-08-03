'use client'

import { MoviesProps } from '@/@types/Movie'
import { GridOfMovies } from '@/components/GridOfMovies'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

interface MoviesResponse {
  data: MoviesProps[]
}
interface SearchSectionProps {
  language: string
}

export async function SearchSection({ language }: SearchSectionProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const searchParams = useSearchParams()

  const title = searchParams.get('title')

  const genreId = searchParams.get('genreId')

  const response: MoviesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API}movies?genreId=${genreId}&language=${language}&title=${title}&page=${currentPage}`,
    {
      method: 'GET',
    },
  ).then(async (response) => await response.json())

  return (
    <div className="">
      <GridOfMovies movies={response.data} />
      <div className="bg-red mt-4 flex h-5 w-full items-center justify-center">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Anterior
        </button>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Próxima
        </button>
      </div>
    </div>
  )
}
