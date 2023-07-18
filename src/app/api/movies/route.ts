import {  NextResponse  } from "next/server"

export async function GET(request: Request) {
    // const formData = await request.formData()
    // const body = Object.fromEntries(formData)
    // console.log(body)
    // return NextResponse.json({ body })
    const { searchParams } = new URL(request.url)
    const genreId = searchParams.get('genreId')
    const language = searchParams.get('language')
    const title = searchParams.get('title')

    if (!!genreId) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_TMBD_BASE_URL}/discover/movie?include_adult=false&with_genres=${genreId}&language=${language}&page=1&sort_by=popularity.desc`,
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

        return NextResponse.json({ data: movies })
      } else {
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

        return NextResponse.json({ data: movies })
      }
}