'use client'

import { MoviesProps } from '@/@types/Movie'
import { ListContext } from '@/contexts/ListContext'
import Image from 'next/image'
import { useContext, useState } from 'react'

interface ListSectionProps {
  language: string
}

export function ListSection({ language }: ListSectionProps) {
  const [showMore, setShowMore] = useState(false)
  const { list } = useContext(ListContext)
  const [listSimilar, setListSimilar] = useState([])

  const displayedItems = showMore ? list : list.slice(0, 6)

  async function handleGenerateSimilarMovies() {
    const listIds = list.map((movie) => movie.id)
    const formData = new FormData()
    formData.append('listIds', JSON.stringify(listIds))

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}recomendations/`,
      {
        method: 'POST',
        body: formData,
      },
    ).then(async (response) => await response.json())

    setListSimilar(response.data)
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10">
        {displayedItems.map((movie, index) => (
          <div
            key={movie.id}
            className="flex w-96 flex-col gap-5 rounded-lg border-0 bg-indigo-700 p-5"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_TMBD_IMAGE_BASE_URL}${process.env.NEXT_PUBLIC_TMBD_IMAGE_SIZE}${movie.backdrop_path}`}
              alt="imagem retirada do filme"
              width={1920}
              height={1280}
              className="rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <h1 className="text-center text-lg font-bold">{movie.title}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="my-10 flex justify-center gap-5">
        {list.length > 6 && !showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="rounded-md bg-blue-500 p-2 text-white"
          >
            Ver mais
          </button>
        )}
        {showMore && (
          <button
            onClick={() => setShowMore(false)}
            className="rounded-md bg-blue-500 p-2 text-white"
          >
            Ver menos
          </button>
        )}
        {list.length > 0 && (
          <button
            type="button"
            className="rounded-md bg-violet-600 p-2 text-white"
            aria-label="Gerar recomendacoes a partir de sua lista"
            title="Gerar recomendacoes a partir de sua lista"
            onClick={handleGenerateSimilarMovies}
          >
            Gerar +
          </button>
        )}
      </div>
      {listSimilar.length > 0 && (
        <>
          <h2 className="my-10 text-center  text-3xl font-bold">
            Recomendações
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {listSimilar.map((movie: MoviesProps, index) => (
              <div
                key={movie.id + index}
                className="flex w-96 flex-col gap-5 rounded-lg border-0 bg-indigo-700 p-5"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_TMBD_IMAGE_BASE_URL}${process.env.NEXT_PUBLIC_TMBD_IMAGE_SIZE}${movie.backdrop_path}`}
                  alt="imagem retirada do filme"
                  width={1920}
                  height={1280}
                  className="rounded-lg object-cover"
                />
                <div className="flex flex-col">
                  <h1 className="text-center text-lg font-bold">
                    {movie.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}
