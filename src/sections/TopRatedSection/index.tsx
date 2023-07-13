import { Carousel } from '@/components/Carousel'

export async function TopRatedSection({ language }: { language: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMBD_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=${language}&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`,
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
      <h2 className="text-1 mt-10">Melhores Avaliados:</h2>
      <Carousel movies={movies} slidesToShow={5.05}/>
    </>
  )
}
