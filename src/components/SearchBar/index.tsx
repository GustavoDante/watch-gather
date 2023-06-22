'use client'

import Image from 'next/image'
import Link from 'next/link'
import searchIcon from '../../../public/search-icon.svg'
import { useState } from 'react'

export function SearchBar() {
  const [search, setSearch] = useState('')

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="border-gray-300 w-full rounded-2xl border px-4 py-2 text-dark-blue focus:border-dark-blue focus:outline-none"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 right-0 flex items-center px-2">
        <Link
          type="submit"
          className="p-2 focus:bg-dark-blue focus:outline-none"
          href={'/search?title=' + search}
        >
          <Image
            src={searchIcon}
            alt="icone de uma lupa"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  )
}
