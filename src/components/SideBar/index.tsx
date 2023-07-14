'use client'

import { useState } from 'react'
import { ButtonWithIcon } from '../ButtonWithIcon'

export default function SideBar() {
  const [show, setShow] = useState(true)

  return (
    <div className={`mt-10 w-2/12 z-30 min-w-max ${show ? '' : 'hidden'}`}>
      <div className=" flex h-full flex-col gap-5 align-bottom text-red-50">
        <div className='flex justify-between w-3/4 items-center'>
          <h2 className="text-base">Gêneros:</h2>
          <button type='button'  
          onClick={() => setShow(!show)} 
          className='hover:text-dark-blue font-extrabold text-2xl 
          transition delay-150 duration-300 ease-in-out 
          hover:-translate-y-1 hover:scale-110'>
            &#9776;
          </button>
        </div>
        
        <div className="flex flex-col px-3 text-base text-gray">
          <ButtonWithIcon text="Ação" />
          <ButtonWithIcon text="Animação" />
          <ButtonWithIcon text="Aventura" />
          <ButtonWithIcon text="Comédia" />
          <ButtonWithIcon text="Crime" />
          <ButtonWithIcon text="Documentário" />
          <ButtonWithIcon text="Drama" />
          <ButtonWithIcon text="Fantasia" />
          <ButtonWithIcon text="Família" />
          <ButtonWithIcon text="Ficção" />
          <ButtonWithIcon text="Guerra" />
          <ButtonWithIcon text="Mistério" />
          <ButtonWithIcon text="Romance" />
          <ButtonWithIcon text="Suspense" />
          <ButtonWithIcon text="Terror" />
        </div>
      </div>
    </div>
  )
}
