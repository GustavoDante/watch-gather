'use client'

import Link from 'next/link'
import Image from 'next/image'
import LogoWatchGater from '../../../public/icons/wt-icon.png'
import { SearchBar } from '../SearchBar'
import { useState } from 'react'
import SideBar from '../SideBar'
import { useRouter } from 'next/navigation'
import IconList from '../../../public/icons/list-icon.svg'

export function NavBar() {
  const [show, setShow] = useState(false)
  const router = useRouter()

  return (
    <>
      <div className="sticky top-0 z-20 flex h-20 w-full">
        <div className="flex w-2/12 items-center justify-start">
          <Link href={'/'}>
            <Image
              src={LogoWatchGater}
              width={50}
              height={10}
              priority={false}
              alt="Logo WatchGater"
              className="h-auto w-auto rounded-md"
            />
          </Link>
        </div>

        <div className="flex w-10/12 items-center gap-5 text-2xl text-red-50 ">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => router.push('/list')}
              aria-label="Ver lista de filmes"
              title="Ver lista de filmes"
            >
              <Image
                src={IconList}
                alt="rolo de filme"
                className="w-10"
                width={16}
                height={16}
              />
            </button>
          </div>
          <SearchBar />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="text-2xl font-extrabold transition 
            delay-150 duration-300 ease-in-out hover:-translate-y-1 
            hover:scale-110 hover:text-dark-blue"
          >
            &#9776;
          </button>
        </div>
      </div>
      <div
        className={`fixed right-0 top-20 z-20 h-screen w-52 rounded-l-lg bg-dark-blue ${
          show ? '' : 'hidden'
        }`}
        onClick={() => setShow(false)}
      >
        <SideBar />
      </div>
    </>
  )
}
