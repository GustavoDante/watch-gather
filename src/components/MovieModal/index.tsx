'use client'

import { MovieFullProps } from '@/@types/Movie'
import Image from 'next/image'

interface MovieResponse {
  data: MovieFullProps
}

interface ModalProps {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  language: string
  movieId: number
  setMovieId: (movieId: number) => void
}

export default async function MovieModal({
  showModal,
  setShowModal,
  language,
  movieId,
  setMovieId,
}: ModalProps) {
  const response: MovieResponse = movieId
    ? await fetch(
        `${process.env.NEXT_PUBLIC_API}info?movieId=${movieId}&language=${language}`,
        {
          method: 'GET',
        },
      ).then(async (response) => await response.json())
    : ({} as MovieResponse)

  function handleCloseModal() {
    setMovieId(0)
    setShowModal(false)
  }

  function formatCurrency(value: number) {
    const formattedValue = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return formattedValue
  }

  function convertDateFormat(inputDate: string) {
    const parts = inputDate.split('-')
    if (parts.length !== 3) {
      throw new Error('Formato de data inválido. Use o formato "YYYY-MM-DD".')
    }

    const day = parts[2]
    const month = parts[1]
    const year = parts[0]

    return `${day}/${month}/${year}`
  }

  const movie: MovieFullProps = response?.data

  return (
    <>
      {showModal ? (
        <div className="absolute left-0 top-1/2 flex h-auto w-full items-center justify-center">
          <div className="fixed z-50 flex h-auto max-h-[calc(100vh-10rem)] max-w-[90%] items-center justify-center overflow-y-auto overflow-x-hidden outline-none scrollbar-hide focus:outline-none">
            <div className="relative h-auto w-auto  ">
              {/* content */}
              <div className="flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/* header */}
                <div className="max-h-30 relative flex items-start justify-between overflow-hidden rounded-t">
                  <div className="w-full">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_TMBD_IMAGE_BASE_URL}${process.env.NEXT_PUBLIC_TMBD_IMAGE_SIZE}${movie.backdrop_path}`}
                      alt="movie"
                      width={1280}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="absolute bottom-0 z-50 flex w-full justify-center bg-gradient-to-b from-transparent to-white pt-10 text-3xl font-semibold text-purple-700">
                    {movie.title}
                  </h3>
                  <strong
                    className={
                      'absolute left-2 top-2 inline-block justify-center rounded-xl bg-purple-900 px-3 py-1 text-xl text-slate-50'
                    }
                  >
                    Nota:{' '}
                    {movie.vote_average ? movie.vote_average.toFixed(2) : ''}
                  </strong>
                </div>
                {/* body */}
                <div className="flex flex-col gap-y-3 p-6">
                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                    {movie.overview}
                  </p>
                  <div>
                    {movie.genres.map((genre, index) => (
                      <span
                        key={index}
                        className="mr-2 mt-1 inline-block rounded-xl bg-purple-900 px-3 py-1 text-sm font-semibold text-slate-50"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                  <span className="block">
                    Orçamento:{' '}
                    {movie.budget
                      ? formatCurrency(movie.budget)
                      : 'Sem informações disponíveis'}
                  </span>
                  <span className="block">
                    Receita:{' '}
                    {movie.revenue
                      ? formatCurrency(movie.revenue)
                      : 'Sem informações disponíveis'}
                  </span>
                  <span className="block">
                    Data de lançamento: {convertDateFormat(movie.release_date)}
                  </span>
                </div>
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={handleCloseModal}
                  >
                    Fechar
                  </button>
                  <button
                    className="mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={handleCloseModal}
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-50"
            onClick={() => setShowModal(false)}
          ></div>
        </div>
      ) : null}
    </>
  )
}
