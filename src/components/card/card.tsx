type CardProps = {
    children: React.ReactNode
    id: string
  }
  
  export function Card({ children, id }: CardProps) {
    return (
      <div id={id} className="p-4 flex justify-start items-center">
        {children}
      </div>
    )
  }
  