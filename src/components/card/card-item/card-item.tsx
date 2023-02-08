import { Card } from '@components/components/card'
import { Text } from '@components/components/text'
import Image from 'next/image'

export type ItemFazendaProps = {
  __id: string,
  name: string,
  description: string,
  picture: string,
  positive?: number,
  negative?: number,
}

export function CardItem({ fazenda }: { fazenda: ItemFazendaProps[] }) {
  return (
    <>
      {/* os icones são brancos */}
      {fazenda.map(({ picture, __id, name, description }) => (
        <Card id={__id}>
          <Image className="rounded-full h-[70px] border-[#b93739] border-4 border-solid" src={picture} title={`Fotografia de ${name}`} alt={`Fotografia de ${name}`} width={70} height={70} loading='lazy'>

          </Image>
          <div className='ml-4'>
            <Text as="p" color="primary" className='font-bold text-lg'>
              {name}
            </Text>
            <Text as="p" color="secondary" className='font-semi'>
              {description}
            </Text>
          </div>
        </Card>
      ))}
    </>
  )
}
