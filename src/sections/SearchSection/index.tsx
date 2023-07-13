'use client'

import { GridOfMovies } from '@/components/GridOfMovies'
import { useSearchParams } from 'next/navigation'

export async function SearchSection({
  language
}: {
  language: string
}) {
  const searchParams = useSearchParams()

  const title = searchParams.get('title')

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMBD_BASE_URL}/search/movie?include_adult=false&include_video=false&language=${language}&page=1&sort_by=popularity.desc&query=${title}`,
    {
      next: {
        revalidate: 86400, // 1 dia em segundos*
      },
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMBD_BEARER_TOKEN}`,
      },
    },
  )

  const data = await response.json()

  const movies = data.results

  return <GridOfMovies movies={movies} />
}
