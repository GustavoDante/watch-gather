import { MoviesProps } from "@/@types/Movie";

interface BackDropProps {
    movie: MoviesProps
    fullWith?: boolean

}

export function BackDrop({ movie, fullWith }: BackDropProps) {
    return (
        <div className={`invisible absolute left-0 top-0 z-10 ${fullWith ? 'w-full' : 'w-5/6'} h-full bg-black/80 p-2 text-white backdrop-opacity-100 group-hover:visible rounded-2xl cursor-pointer `}>
            <h3 className='text-center h-1/6'>{movie.title.length > 30 ? `${movie.title.substring(0, 30)}...` : movie.title}</h3>
            <div className='flex flex-col justify-end h-5/6'>
                <strong className={'text-sm text-slate-900 flex justify-center bg-slate-100 rounded-xl w-1/4'}>{movie.vote_average ? movie.vote_average.toFixed(1) : ''}</strong>
                <p className={`text-xs hidden xl:block`}>
                Sinopse:{' '}
                {movie.overview.length > 100
                    ? `${movie.overview.substring(0, 100)}...`
                    : (movie.overview === '') ? 'Não há sinopse disponível' : movie.overview}
                </p>
            </div>
        </div>
    )
}