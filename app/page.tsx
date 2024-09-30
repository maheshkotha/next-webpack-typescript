"use client"
import Link from 'next/link'
import React from 'react'

const Home = () => {
  const routeList = [
    {
      name: 'client-side-input-validation',
      route: 'input-validation',
    },
    {
      name: 'Security Methods',
      route: 'security'
    }
  ]
  return (
    <div>
      Welcome to next js with Typescript

      <div style={{display: 'flex', flexDirection: "column", gap: '20px', margin: '1rem'}}>
        {
          routeList.map((item) => {
            return <Link href={`/${item.route}`}>{item.name}</Link>
          })
        }
      </div>
    </div>
  )
}

export default Home