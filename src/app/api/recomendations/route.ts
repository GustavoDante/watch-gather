import { MoviesProps } from '@/@types/Movie'
import { NextResponse } from 'next/server'

interface SimilarProps {
  page: number
  results: Array<MoviesProps>
}
export async function POST(request: Request) {
  const formData = await request.formData()
  const body = Object.fromEntries(formData)
  const language = 'pt-BR'
  const quantityOfMovies = 5

  const listId: number[] = JSON.parse(body.listIds as string)

  const movies: MoviesProps[] = []

  try {
    while (movies.length < quantityOfMovies) {
      for (const movieId of listId) {
        const response: SimilarProps = await fetch(
          `${process.env.NEXT_PUBLIC_TMBD_BASE_URL}/movie/${movieId}/similar?language=${language}`,
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
        ).then(async (response) => await response.json())

        if (response.results.length === 0) {
          return null // Retorna null se o array estiver vazio
        }

        response.results = response.results.filter((movie) => {
          if (movie.backdrop_path !== null) {
            return movie
          } else {
            return null
          }
        })

        const randomIndex = Math.floor(Math.random() * response.results.length)

        movies.push(response.results[randomIndex])

        if (movies.length === quantityOfMovies) {
          break // Para o loop quando o array tiver 10 filmes
        }
      }
    }

    return NextResponse.json({ data: movies })
  } catch (error) {
    return NextResponse.error()
  }
}
