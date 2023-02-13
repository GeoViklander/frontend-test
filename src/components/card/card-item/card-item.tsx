import { Card } from '@components/components/card'
import { Text } from '@components/components/text'
import Image from 'next/image'
import { Tooltip } from '@components/components/tooltip'

export type ItemFazendaProps = {
  __id: string,
  name: string,
  description: string,
  picture: string,
  positive: number,
  negative: number,
}

export function CardItem({ fazenda }: { fazenda: ItemFazendaProps[] }) {

  return (
    <>
      {fazenda.map(({ picture, __id, name, description, positive, negative}) => (
        <Card id={__id}>
          <Image className="rounded-full h-[50px] border-[#b93739] border-4 border-solid lg:w-20 lg:h-20" src={picture} title={`Fotografia de ${name}`} alt={`Fotografia de ${name}`} width={50} height={50} loading='lazy'/>
          <div className='ml-4'>
            <Text as="p" color="primary" className='card-item-name font-bold text-lg'>
              {name}
            </Text>
            <Text as="p" color="secondary" className='card-item-description font-semi'>
              {description.replace("&ordm;", "°")}
            </Text>
          </div>
          <Tooltip porcentagemPositive={`30%`} porcentagemNegative={`67%`} />
        </Card>
      ))}
    </>
  )
}
