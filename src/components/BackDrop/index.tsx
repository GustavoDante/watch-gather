import { MoviesProps } from '@/@types/Movie'

interface BackDropProps {
  movie: MoviesProps
  fullWith?: boolean
}

export function BackDrop({ movie, fullWith }: BackDropProps) {
  return (
    <div
      className={`invisible absolute left-0 top-0 z-10 ${
        fullWith ? 'w-full' : 'w-5/6'
      } h-full cursor-pointer rounded-2xl bg-black/80 p-2 text-white backdrop-opacity-100 group-hover:visible `}
    >
      <h3 className="h-1/6 text-center">
        {movie.title.length > 30
          ? `${movie.title.substring(0, 30)}...`
          : movie.title}
      </h3>
      <div className="flex h-5/6 flex-col justify-end">
        <strong
          className={
            'flex w-1/4 justify-center rounded-xl bg-slate-100 text-sm text-slate-900'
          }
        >
          {movie.vote_average ? movie.vote_average.toFixed(1) : ''}
        </strong>
        <p className={`hidden text-xs xl:block`}>
          Sinopse:{' '}
          {movie.overview.length > 100
            ? `${movie.overview.substring(0, 100)}...`
            : movie.overview === ''
            ? 'Não há sinopse disponível'
            : movie.overview}
        </p>
      </div>
    </div>
  )
}
