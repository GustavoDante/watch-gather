import { MoviesProps } from '@/@types/Movie'
import Image from 'next/image'
import Link from 'next/link'
import { BackDrop } from '../BackDrop'

export function GridOfMovies({ movies }: { movies: MoviesProps[] }) {
  movies = movies.filter((movie) => movie.poster_path !== null)
  return (
    <div className="mt-10 grid w-full grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
      {movies
        .filter((movie) => movie.poster_path !== null)
        .map((movie, index) => (
          <div
            key={index}
            className="group relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <Link href={`#`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_TMBD_IMAGE_BASE_URL}${process.env.NEXT_PUBLIC_TMBD_IMAGE_SIZE}${movie.poster_path}`}
                alt={`Poster do filme "${movie.title}"`}
                className="h-full w-full rounded-2xl"
                width={280}
                height={400}
              />
            </Link>
            <BackDrop movie={movie} fullWith/>
          </div>
        ))}
    </div>
  )
}
