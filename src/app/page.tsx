import { PopularSection } from '@/sections/PopularSection'
import { TopRatedSection } from '@/sections/TopRatedSection'
import { UpComingSection } from '@/sections/UpComingSection'

export default async function Page() {
  const language = 'pt-BR'
  const region = 'BR'

  return (
    <div className="flex w-full">
      <div className="mt-10 w-full">
        {/* @ts-expect-error */}
        <UpComingSection language={language} region={region} />
        {/* @ts-expect-error */}
        <TopRatedSection language={language} region={region} />
        {/* @ts-expect-error */}
        <PopularSection language={language} region={region} />
        {/* @ts-expect-error */}
        <TopRatedSection language={language} region={region} />
        {/* @ts-expect-error */}
        <PopularSection language={language} region={region} />
      </div>
    </div>
  )
}
