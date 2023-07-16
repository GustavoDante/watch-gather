import { ButtonWithIcon } from '../ButtonWithIcon'
import moviesIcon from '../../../public/icons/genres/movies.svg'
import actionIcon from '../../../public/icons/genres/action.svg'
import adventureIcon from '../../../public/icons/genres/adventure.svg'
import animationIcon from '../../../public/icons/genres/animation.svg'
import comedyIcon from '../../../public/icons/genres/comedy.svg'
import crimeIcon from '../../../public/icons/genres/crime.svg'
import documentaryIcon from '../../../public/icons/genres/documentary.svg'
import dramaIcon from '../../../public/icons/genres/drama.svg'
import familyIcon from '../../../public/icons/genres/family.svg'
import fantasyIcon from '../../../public/icons/genres/fantasy.svg'
import mysteryIcon from '../../../public/icons/genres/mystery.svg'
import romanceIcon from '../../../public/icons/genres/romance.svg'
import thrillerIcon from '../../../public/icons/genres/thriller.svg'
import suspenseIcon from '../../../public/icons/genres/suspense.svg'
import warIcon from '../../../public/icons/genres/war.svg'
import Image from 'next/image'

export default function SideBar() {

  return (
      <div className="flex w-full h-full flex-col gap-5 align-bottom text-red-50">
        <div className='flex justify-center items-center mt-2'>
          <Image src={moviesIcon} alt="icone de genero" width={25} height={25} className="mr-2"/>
          <h2 className="text-base">Gêneros:</h2>
        </div>
        
        <div className="flex flex-col px-3 text-base text-gray text-right">
          <ButtonWithIcon text="Ação" img={actionIcon}/>
          <ButtonWithIcon text="Animação" img={animationIcon}/>
          <ButtonWithIcon text="Aventura" img={adventureIcon}/>
          <ButtonWithIcon text="Comédia" img={comedyIcon}/>
          <ButtonWithIcon text="Crime" img={crimeIcon}/>
          <ButtonWithIcon text="Documentário" img={documentaryIcon}/>
          <ButtonWithIcon text="Drama" img={dramaIcon}/>
          <ButtonWithIcon text="Fantasia" img={fantasyIcon}/>
          <ButtonWithIcon text="Família" img={familyIcon}/>
          <ButtonWithIcon text="Guerra" img={warIcon}/>
          <ButtonWithIcon text="Mistério" img={mysteryIcon}/>
          <ButtonWithIcon text="Romance" img={romanceIcon}/>
          <ButtonWithIcon text="Suspense" img={suspenseIcon}/>
          <ButtonWithIcon text="Terror" img={thrillerIcon}/>
        </div>
      </div>
  )
}
