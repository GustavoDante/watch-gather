import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const movieId = searchParams.get('movieId')
  const language = searchParams.get('language')

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMBD_BASE_URL}/movie/${movieId}?language=${language}`,
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

    return NextResponse.json({ data })
  } catch (error) {
    return console.error(error)
  }
}
