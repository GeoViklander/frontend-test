type CardProps = {
  children: React.ReactNode
  id: string
}
  
export function Card({ children, id }: CardProps) {
  return (
    <div id={id} className="tooltip lg:p-4 p-2 hover:bg-[#b93739] flex justify-start items-center bg-white even:bg-[#f2f0f1]">
      {children}
    </div>
  )
}
  