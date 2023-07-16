'use client'

import { useState } from 'react'
import { ButtonWithIcon } from '../ButtonWithIcon'

export default function SideBar() {

  return (
      <div className="flex w-full h-full flex-col gap-5 align-bottom text-red-50">
        <div className='flex justify-center w-3/4 items-center'>
          <h2 className="text-base">Gêneros:</h2>
        </div>
        
        <div className="flex flex-col px-3 text-base text-gray text-right">
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
  )
}
