import { MoviesProps } from '@/@types/Movie'
import Image from 'next/image'
import Link from 'next/link'

export function GridOfMovies({ movies }: { movies: MoviesProps[] }) {
  return (
    <div className="xl:grid-col-5 mt-10 grid w-full grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="group relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          <Link href={`/movie/${movie.id}`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_TMBD_IMAGE_BASE_URL}${process.env.NEXT_PUBLIC_TMBD_IMAGE_SIZE}${movie.poster_path}`}
              alt={`Poster do filme "${movie.title}"`}
              className="h-full w-full rounded-2xl"
              width={280}
              height={400}
            />
          </Link>
          <div className="invisible absolute left-0 top-0 z-10 h-full w-full bg-black/80 p-2 text-white backdrop-opacity-100 group-hover:visible">
            <h3>{movie.title}</h3>
            <strong>Nota: {movie.vote_average}/10</strong>
            <p>
              {movie.overview.length > 100
                ? `${movie.overview.substring(0, 100)}...`
                : movie.overview}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
