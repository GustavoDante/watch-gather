import Image from "next/image"

interface ButtonWithIconProps {
  text: string
  img: string
}

export function ButtonWithIcon({ text, img }: ButtonWithIconProps) {
  return (
    <div className="cursor-pointer py-3 hover:bg-light-blue flex items-center rounded-md text-zinc-300">
      <Image src={img} alt="icone de genero" width={25} height={25} className="mx-2"/>
      <a href="#" className="">{text}</a>
    </div>
  )
}
