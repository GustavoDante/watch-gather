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
    <div className="flex h-full w-full flex-col gap-5 align-bottom text-red-50">
      <div className="mt-2 flex items-center justify-center">
        <Image
          src={moviesIcon}
          alt="icone de genero"
          width={25}
          height={25}
          className="mr-2"
        />
        <h2 className="text-base">Gêneros:</h2>
      </div>

      <div className="flex flex-col px-3 text-right text-base text-gray">
        <ButtonWithIcon text="Ação" img={actionIcon} genreId={28} />
        <ButtonWithIcon text="Animação" img={animationIcon} genreId={16} />
        <ButtonWithIcon text="Aventura" img={adventureIcon} genreId={12} />
        <ButtonWithIcon text="Comédia" img={comedyIcon} genreId={35} />
        <ButtonWithIcon text="Crime" img={crimeIcon} genreId={80} />
        <ButtonWithIcon
          text="Documentário"
          img={documentaryIcon}
          genreId={99}
        />
        <ButtonWithIcon text="Drama" img={dramaIcon} genreId={18} />
        <ButtonWithIcon text="Fantasia" img={fantasyIcon} genreId={14} />
        <ButtonWithIcon text="Família" img={familyIcon} genreId={10751} />
        <ButtonWithIcon text="Guerra" img={warIcon} genreId={10752} />
        <ButtonWithIcon text="Mistério" img={mysteryIcon} genreId={9648} />
        <ButtonWithIcon text="Romance" img={romanceIcon} genreId={10749} />
        <ButtonWithIcon text="Suspense" img={suspenseIcon} genreId={53} />
        <ButtonWithIcon text="Terror" img={thrillerIcon} genreId={27} />
      </div>
    </div>
  )
}
