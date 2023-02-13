type CardProps = {
  children: React.ReactNode
}
  
export function Card({ children }: CardProps) {
  return (
    <li className="tooltip lg:p-4 p-2 hover:bg-[#b93739] flex justify-start items-center bg-white even:bg-[#f2f0f1]">
      {children}
    </li>
  )
}
  