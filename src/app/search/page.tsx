// import { SearchSection } from '@/sections/SearchSection'

// export default function SearchPage(params: {
//   params: {}
//   searchParams: { title: string }
// }) {
//   const language = 'pt-BR'
//   const request = params

//   if (!request || !request.searchParams || !request.searchParams.title) {
//     return (
//       <div className="mt-10 w-10/12">
//         <h2 className="text-1 mb-1">Nenhum resultado encontrado</h2>
//       </div>
//     )
//   }

//   return (
//     <>
//       {/* @ts-expect-error */}
//       <SearchSection language={language} title={params.searchParams.title} />
//     </>
//   )
// }

'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SearchPage() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('search')
 
  // This will be logged on the server during the initial render
  // and on the client on subsequent navigations.
  console.log(search)
 
  return <>Search: {search}</>
}