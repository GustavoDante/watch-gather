import Link from 'next/link'
import Image from 'next/image'
import LogoWatchGater from '../../../public/watch_together.png'
import { SearchBar } from '../SearchBar'

export function NavBar() {
  return (
    <div className="flex h-20 w-full">
      <div className="flex w-2/12 justify-start">
        <Link href={'#'}>
          <Image
            src={LogoWatchGater}
            width={110}
            height={10}
            alt="simbolo beta azul"
            className="rounded-md"
          />
        </Link>
      </div>

      <div className="flex w-10/12 items-center gap-5 text-2xl text-red-50">
        <div className="flex items-center gap-5 text-2xl text-red-50">
          <Link href={'#'}>Series</Link>
          <Link href={'#'}>Filmes</Link>
        </div>
        <SearchBar />
        <Link href={'#'}>Selecao</Link>
      </div>
    </div>
  )
}
