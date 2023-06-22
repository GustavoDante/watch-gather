import { GridOfMovies } from '@/components/GridOfMovies'

export async function SearchSection({
  language,
  title,
}: {
  language: string
  title: string
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMBD_BASE_URL}/search/movie?include_adult=true&include_video=false&language=${language}&page=1&sort_by=popularity.desc&query=${title}`,
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
