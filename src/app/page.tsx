import Image from 'next/image'
import './globals.css';
import { CardItem } from '@components/card/card-item';
import { fazenda } from '@constants/constants'
import Logo from "/public/fazenda-logo.png"
import { Text } from '@components/text'




export default function Home() {
  const { data } = fazenda
  return (
    <>
      <div className='my-[100px] ml-5 flex flex-col pr-12 lg:mx-auto lg:max-w-[100vh] relative'>
        <header className='my-5 relative w-3/4'>
          <Image src={Logo} alt='Logo de A Fazenda' title='Logo de A Fazenda' width={100} height={100} loading='lazy' className='absolute bottom-[-10px] left-[-20px] lg:left-[-50px] lg:w-[150px] lg:h-[150px]'/>
          <Text as="h1" className='uppercase !text-neutral-500 bg-white text-xl md:text-3xl flex justify-end p-2.5 rounded-md font-bold'>
            Ranking
          </Text>
        </header>
        <main className='w-3/4'>
          <ol>
            <CardItem fazenda={data} />
          </ol>
        </main>
      </div>
    </>
  )
}