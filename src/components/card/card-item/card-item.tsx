import { Card } from '@components/components/card'
import { Text } from '@components/components/text'
import Image from 'next/image'
import { Tooltip } from '@components/components/tooltip'
import { fazenda } from '../../../constants/constants'

export type ItemFazendaProps = {
  __id: string,
  name: string,
  description: string,
  picture: string,
  positive: number,
  negative: number,
} 

export function CardItem({ fazenda }: { fazenda: ItemFazendaProps[] }) {
  const order = [...fazenda].sort((a, b) => b.negative - a.positive);
  var count = 1;  

  return (
    <>
      {order.map(({ picture, __id, name, description, positive, negative}) => (
        <Card id={__id}>
          <div className='flex items-end flex-row-reverse'>
            <Image className="card-item-image relative rounded-full h-[50px] border-[#b93739] border-4 border-solid lg:w-20 lg:h-20" src={picture} title={`Fotografia de ${name}`} alt={`Fotografia de ${name}`} width={50} height={50} loading='lazy'/>
            <Text as="span" color="tertiary" className="absolute rounded-full font-bold border-2 border-tertiary w-6 h-6 items-center bg-neutral-400 justify-center flex">
              {count++}
            </Text>
          </div>
          <div className='ml-4'>
            <Text as="p" color="primary" className='card-item-name font-bold text-lg'>
              {name}
            </Text>
            <Text as="p" color="secondary" className='card-item-description font-semi'>
              {description.replace("&ordm;", "° ")}
            </Text>
          </div>
          <Tooltip porcentagemPositive={`${((positive*100) / (positive + negative)).toFixed(0)}%`} porcentagemNegative={`${((negative*100) / (positive + negative)).toFixed(0)}%`} />
        </Card>
      ))}
    </>
  )
}


