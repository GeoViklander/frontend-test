import Image from 'next/image'
import { Inter } from '@next/font/google'
import './globals.css';
import { CardItem } from '@components/components/card/card-item';
import { fazenda } from '../constants/constants'
import Logo from "/public/fazenda-logo.png"
import { Text } from '@components/components/text'
import { Tooltip } from '@components/components/tooltip'



export default function Home() {
  const { data } = fazenda
  return (
    <>
    <body className="bg-[#272727]">
      <div className='my-[100px] ml-5 flex flex-col pr-12 lg:mx-auto lg:max-w-[100vh] relative'>
      <header className='my-5 relative w-[70%]'>
        <Image src={Logo} alt='Logo de A Fazenda' title='Logo de A Fazenda' width={100} height={100} loading='lazy' className='absolute bottom-[-10px] left-[-20px] lg:left-[-50px] lg:w-[150px] lg:h-[150px]'/>
        <Text as="h1" className='!text-neutral-500 bg-white text-xl md:text-3xl flex justify-end p-2.5 rounded-md font-bold'>
          Ranking
        </Text>
      </header>
        <main className='w-[70%]'>
            <div className=''>
              <CardItem fazenda={data} />
            </div>
        </main>
      </div>
    </body>
    </>
  )
}