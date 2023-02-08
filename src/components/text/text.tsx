import React from 'react'

type TextProps<C extends React.ElementType> = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  children: React.ReactNode
  color?: 'primary' | 'secondary'
  className?: string
} & React.ComponentPropsWithoutRef<C>

export const Text = <C extends React.ElementType = 'p'>({
  as,
  color = 'primary',
  children,
  className,
  ...rest
}: TextProps<C>) => {
  const colors = {
    primary: 'text-primary',
    secondary: 'text-secundary',
  }
  const DynamicText = as || 'p'

  return (
    <DynamicText className={`${colors[color]} ${className}`} {...rest}>
      {children}
    </DynamicText>
  )
}