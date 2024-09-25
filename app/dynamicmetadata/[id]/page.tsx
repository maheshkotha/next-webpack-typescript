import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import { useRouter } from 'next/navigation'
import BackButton from './BackButton'


type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  const id = params.id

  // fetch data
  const product = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
  
  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

const DynamicMetaData = ({ params, searchParams }: Props) => {

  return (
    <div>
      <BackButton />
      Dynamic Meta Data Page {params.id}</div>
  )
}

export default DynamicMetaData