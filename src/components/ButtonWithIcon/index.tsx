'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ButtonWithIconProps {
  text: string
  img: string
  genreId?: number
}

export function ButtonWithIcon({ text, img, genreId }: ButtonWithIconProps) {
  const router = useRouter()

  return (
    <button
      className="flex cursor-pointer items-center rounded-md py-3 text-zinc-300 hover:bg-light-blue"
      onClick={() => router.push('/search?genreId=' + genreId)}
      type="button"
    >
      <Image
        src={img}
        alt="icone de genero"
        width={25}
        height={25}
        className="mx-2"
      />
      {text}
    </button>
  )
}
