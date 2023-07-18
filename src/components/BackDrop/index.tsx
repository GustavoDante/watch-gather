import { MoviesProps } from "@/@types/Movie";

interface BackDropProps {
    movie: MoviesProps
    fullWith?: boolean
    biggerText?: boolean

}

export function BackDrop({ movie, fullWith, biggerText }: BackDropProps) {
    return (
        <div className={`invisible absolute left-0 top-0 z-10 ${fullWith ? 'w-full' : 'w-5/6'} h-full bg-black/80 p-2 text-white backdrop-opacity-100 group-hover:visible rounded-2xl cursor-pointer`}>
            <h3 className='text-center h-1/6'>{movie.title}</h3>
            <div className='flex flex-col justify-end h-5/6'>
                <strong className={`${biggerText ? 'text-lg' : 'text-sm'}`}>Nota: {movie.vote_average}/10</strong>
                <p className={`${biggerText ? 'text-base' : 'text-xs'}`}>
                Sinopse:{' '}
                {movie.overview.length > 100
                    ? `${movie.overview.substring(0, 100)}...`
                    : (movie.overview === '') ? 'Não há sinopse disponível' : movie.overview}
                </p>
            </div>
        </div>
    )
}