import { Carousel } from '@/components/Carousel'

interface TopRatedSectionProps {
  language: string
  region: string
}

export async function TopRatedSection({
  language,
  region,
}: TopRatedSectionProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMBD_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=${language}&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&region=${region}`,
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
      <h2 className="md:text-md mt-10 text-sm lg:text-lg">
        Melhores Avaliados:
      </h2>
      <Carousel movies={movies} slidesToShow={7.05} />
    </>
  )
}
