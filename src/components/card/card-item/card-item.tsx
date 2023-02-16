import { Card } from '@components/components/card'
import { Text } from '@components/components/text'
import Image from 'next/image'
import { Tooltip } from '@components/components/tooltip'

export type ItemFazendaProps = {
  __id: string,
  name: string,
  description: string,
  picture: string,
  positive?: number | null,
  negative?: number | null,
} 

export function CardItem({ fazenda }: { fazenda: ItemFazendaProps[] }) {
  
  function test (votos, total) {
    var calc = ((votos*100) / total).toFixed(0);
    return calc
  }

  // array temporário 
  const order = fazenda.map(function({ __id, name, description, positive, picture, negative }) {
    return { __id, name, description, positive, picture, negative, value: positive };
  })

  // ordenando o array 
  order.sort(function(a, b) {
    return +(a.value < b.value) || +(a.value === b.value) - 1;
  });


    const result = order.map(function(item, index){
    const numbersPositive = item.positive || 0 ;
    const numbersNegative = item.negative || 0;
    const total = numbersPositive + numbersNegative; 

    return (
      <Card key={item.__id}>
        <div className='flex items-end flex-row-reverse'>
          <Image className="card-item-image relative rounded-full h-[50px] border-[#b93739] border-4 border-solid lg:w-20 lg:h-20" src={item.picture} title={`Fotografia de ${item.name}`} alt={`Fotografia de ${item.name}`} width={50} height={50} loading='lazy'/>
          <Text as="span" color="tertiary" className="absolute rounded-full font-bold border-2 border-tertiary w-6 h-6 items-center bg-neutral-400 justify-center flex">
            {index +1}
          </Text>
        </div>
        <div className='ml-4'>
          <Text as="p" color="primary" className='card-item-name font-bold text-lg'>
            {item.name}
          </Text>
          <Text as="p" color="secondary" className='card-item-description font-semi'>
            {item.description.replace("&ordm;", "°")}
          </Text>
        </div>
        <Tooltip porcentagemPositive={`${test(numbersPositive, total)}%`} porcentagemNegative={`${test(numbersNegative, total)}%`} />
      </Card>
    );
  });

  return (
    <>
      {result}
    </>

  )
}
