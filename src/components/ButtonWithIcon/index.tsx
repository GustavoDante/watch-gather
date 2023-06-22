export function ButtonWithIcon({ text }: { text: string }) {
  return (
    <div className="cursor-pointer py-3 hover:text-light-blue">
      <a href="#">{text}</a>
    </div>
  )
}
