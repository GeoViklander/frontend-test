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
  var count = 1;  

  return (
    <>
      {[...fazenda]
        .sort((a, b) => b.negative - a.positive )
        .map(fazenda => {
        var numbersPositive = fazenda.positive || 0 ;
        var numbersNegative = fazenda.negative || 0;
        var total = numbersPositive + numbersNegative; 
        var percentagePositive = ((numbersPositive*100) / total).toFixed(0);
        var percentageNegative = ((numbersNegative*100) / total).toFixed(0);
          
        return (
          <Card key={fazenda.__id}>
             <div className='flex items-end flex-row-reverse'>
               <Image className="card-item-image relative rounded-full h-[50px] border-[#b93739] border-4 border-solid lg:w-20 lg:h-20" src={fazenda.picture} title={`Fotografia de ${fazenda.name}`} alt={`Fotografia de ${fazenda.name}`} width={50} height={50} loading='lazy'/>
               <Text as="span" color="tertiary" className="absolute rounded-full font-bold border-2 border-tertiary w-6 h-6 items-center bg-neutral-400 justify-center flex">
                 {count++}
               </Text>
             </div>
             <div className='ml-4'>
               <Text as="p" color="primary" className='card-item-name font-bold text-lg'>
                 {fazenda.name}
               </Text>
               <Text as="p" color="secondary" className='card-item-description font-semi'>
                 {fazenda.description.replace("&ordm;", "°")}
               </Text>
             </div>
             <Tooltip porcentagemPositive={`${percentagePositive}%`} porcentagemNegative={`${percentageNegative}%`} />
          </Card>
        );
      })}
    </>
  );
}
