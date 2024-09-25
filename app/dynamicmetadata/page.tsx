"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const DynamicMetaData = () => {
  const [products, setPorducts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('https://dummyjson.com/products')
      const result = await res.json()
      setPorducts(result?.products)
    })()
  }, [])
  
  return (
    <div>
      <h1>Dynamic metadata Page</h1>
      {
        products.length > 0 && products.map((item) => {
          return <Link key={item.id} href={`./dynamicmetadata/${item.id}`}>
              <div >{item.id}</div>
            </Link>
        })
      }
    </div>
  )
}

export default DynamicMetaData