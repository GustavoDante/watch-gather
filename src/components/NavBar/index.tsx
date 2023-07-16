'use client'

import Link from 'next/link'
import Image from 'next/image'
import LogoWatchGater from '../../../public/icons/wt-icon.png'
import { SearchBar } from '../SearchBar'
import { useState } from 'react'
import SideBar from '../SideBar'

export function NavBar() {
  const [show, setShow] = useState(true)

  return (
    <>
      <div className="flex h-20 w-full sticky top-0 z-20">
        <div className="flex w-2/12 justify-start">
          <Link href={'/'}>
            <Image
              src={LogoWatchGater}
              width={65}
              height={10}
              alt="Logo WatchGater"
              className="h-auto w-auto rounded-md"
            />
          </Link>
        </div>

        <div className="flex w-10/12 items-center gap-5 text-2xl text-red-50">
          <div className="flex items-center gap-5 text-2xl text-red-50">
            <Link href={'#'}>Series</Link>
            <Link href={'#'}>Filmes</Link>
          </div>
          <SearchBar />
          <button type='button'  
            onClick={() => setShow(!show)} 
            className='hover:text-dark-blue font-extrabold text-2xl 
            transition delay-150 duration-300 ease-in-out 
            hover:-translate-y-1 hover:scale-110'>
              &#9776;
            </button>
        </div>
      </div>
      <div className={`fixed rounded-l-lg right-0 top-20 w-52 bg-dark-blue h-screen z-20 ${show ? '' : 'hidden'}`}>
          <SideBar />
      </div>
    </>
    
  )
}
