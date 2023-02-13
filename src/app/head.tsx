import { fazenda } from '../constants/constants'

type HeadProps = {
  box_name: string
}

export default function Head({ box_name }: HeadProps) {
  const { data } = fazenda

  return (
    <>
      <title>{fazenda.box_name}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content={fazenda.box_name} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
