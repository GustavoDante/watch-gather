import SideBar from '@/components/SideBar'
import { PopularSection } from '@/sections/PopularSection'
import { TopRatedSection } from '@/sections/TopRatedSection'
import { UpComingSection } from '@/sections/UpComingSection'

export default async function Page() {
  const language = 'pt-BR'

  return (
    <div className="flex w-full">
      <SideBar />
      <div className="mt-10 w-full">
      
      {/* @ts-expect-error */}
      <UpComingSection language={language} />
      {/* @ts-expect-error */}
      <TopRatedSection language={language} />
      {/* @ts-expect-error */}
      <PopularSection language={language} />
      </div>
    </div>
    
  )
}
