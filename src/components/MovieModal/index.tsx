import { MovieFullProps } from "@/@types/Movie";
import Image from "next/image";

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

export default async function MovieModal({ showModal, setShowModal, language, movieId, setMovieId}: ModalProps) {
    const response: MovieResponse = movieId ? await fetch(
        `${process.env.NEXT_PUBLIC_API}info_movie?movieId=${movieId}&language=${language}`,
        {
          method: 'GET',
        },
      ).then(async (response) => await response.json()) : null

    function handleCloseModal() {
        setMovieId(0)
        setShowModal(false)
    }

    function formatCurrency(value: number) {
      const formattedValue = (value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    
      return formattedValue;
    }

    function convertDateFormat(inputDate: string) {
      const parts = inputDate.split('-');
      if (parts.length !== 3) {
        throw new Error('Formato de data inválido. Use o formato "YYYY-MM-DD".');
      }
      
      const day = parts[2];
      const month = parts[1];
      const year = parts[0];
      
      return `${day}/${month}/${year}`;
    }

    const movie: MovieFullProps = response?.data
    console.log(movie)

  return (
    <>
      {showModal ? (
        <div className="absolute top-1/2 left-0 flex w-full justify-center items-center">
          <div
            className="justify-center h-auto max-h-[calc(100vh-10rem)] max-w-[90%] items-center flex fixed z-50 outline-none focus:outline-none scrollbar-hide overflow-y-auto overflow-x-hidden"
          >
            <div className="relative h-auto w-auto  ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex relative items-start justify-between rounded-t overflow-hidden max-h-30">
                  <div className="w-full">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_TMBD_IMAGE_BASE_URL}${process.env.NEXT_PUBLIC_TMBD_IMAGE_SIZE}${movie.backdrop_path}`}
                      alt="movie"
                      width={1280}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="absolute bottom-0 pt-10 w-full flex justify-center text-3xl font-semibold text-purple-700 z-50 bg-gradient-to-b from-transparent to-white">
                    {movie.title}
                  </h3>
                  <strong 
                    className={'absolute top-2 left-2 inline-block text-xl text-slate-50 justify-center px-3 py-1 bg-purple-900 rounded-xl'}>
                    Nota: {
                    movie.vote_average ? 
                    movie.vote_average.toFixed(2) : 
                    ''}
                  </strong>
                </div>
                {/*body*/}
                <div className="p-6 gap-y-3 flex flex-col">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {movie.overview}
                  </p>
                  <div>
                    {movie.genres.map((genre, index) => (
                      <span key={index} className="inline-block rounded-xl px-3 py-1 text-sm text-slate-50 font-semibold mr-2 mt-1 bg-purple-900">
                        {genre.name}
                      </span>
                    ))}
                  </div>
                  <span className="block">
                    Orçamento: {movie.budget ? formatCurrency(movie.budget) : 'Sem informações disponíveis'}
                  </span>
                  <span className="block">
                    Receita: {movie.revenue ? formatCurrency(movie.revenue) : 'Sem informações disponíveis'}
                  </span>
                  <span className="block">
                    Data de lançamento: {convertDateFormat(movie.release_date)}
                  </span>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCloseModal}
                  >
                    Fechar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCloseModal}
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)} ></div>
        </div>
      ) : null}
    </>
  );
}