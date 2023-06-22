import ButtonWithIcon from '../ButtonWithIcon'

export default function SideBar() {
  return (
    <div className="mt-10 w-2/12">
      <div className=" flex h-full flex-col gap-5 align-bottom text-red-50">
        <h2 className="text-base">Gêneros:</h2>
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
