import { Text } from '@components/components/text' 

type TooltipProps = {
  porcentagemPositive: string
  porcentagemNegative: string
}

  export function Tooltip({ porcentagemPositive, porcentagemNegative }: TooltipProps) {
    return (
      <div className="tooltiptext">
        <div className=' bg-white flex md:divide-x flex-col rounded-md md:flex-row'>
          <div className=''>
            <Text as="p" className='bg-[#b93739] !text-neutral-400 md:rounded-tl-md rounded-t-md md:rounded-t-none px-1.5 md:px-2.5'>
              Gostam
            </Text>
            <Text as="p" color="tertiary" className='md:text-xl font-bold'>
              {porcentagemPositive}
            </Text>
          </div>
          <div>
            <Text as="p" className='bg-[#b93739] !text-neutral-50 md:rounded-tr-md px-1.5 md:px-2.5'>
              Não Gostam
            </Text>
            <Text as="p" color="tertiary" className='md:text-xl font-bold'>
              {porcentagemNegative}
            </Text>
          </div>
        </div>
      </div>
    )
  }