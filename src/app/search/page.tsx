'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SearchPage() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('title')
 
  console.log(search)
 
  return <>Search: {search}</>
}