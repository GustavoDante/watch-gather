'use client'

import { MovieFullProps } from '@/@types/Movie'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface ListContextProps {
  list: MovieFullProps[]
  handleSetList: (list: MovieFullProps[]) => void
}
export const ListContext = createContext({} as ListContextProps)

interface ListProviderProps {
  children: ReactNode
}
export default function ListProvider({ children }: ListProviderProps) {
  const [list, setList] = useState<MovieFullProps[]>([])

  function handleSetList(list: MovieFullProps[]) {
    localStorage.setItem('list', JSON.stringify(list))
    setList(list)
  }

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const list = localStorage.getItem('list')
      if (list) {
        setList(JSON.parse(list))
      }
    }
  }, [])

  return (
    <ListContext.Provider
      value={{
        list,
        handleSetList,
      }}
    >
      {children}
    </ListContext.Provider>
  )
}
