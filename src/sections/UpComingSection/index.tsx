import { Carousel } from '@/components/Carousel'

export async function UpComingSection({ language }: { language: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMBD_BASE_URL}/movie/upcoming?include_adult=false&include_video=false&language=${language}&page=1&sort_by=popularity.desc`,
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

  return (
    <>
      <h2 className="text-1 mb-1">Em Breve:</h2>
      <Carousel movies={movies} slidesToShow={4.05} biggerText/>
    </>
  )
}
