'use client'

import { MoviesProps } from '@/@types/Movie'
import { GridOfMovies } from '@/components/GridOfMovies'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

interface MoviesResponse {
  data: MoviesProps[]
}
interface SearchSectionProps {
  language: string
}

export async function SearchSection({
  language
}: SearchSectionProps) {
  const searchParams = useSearchParams()

  const title = searchParams.get('title')

  const genreId = searchParams.get('genreId')

  const response: MoviesResponse = await fetch(`http://localhost:3000/api/movies?genreId=${genreId}&language=${language}&title=${title}`, {
    method: 'GET',
  }).then(async (response) => await response.json())

  return (
    <GridOfMovies movies={response.data}/>
  )
}