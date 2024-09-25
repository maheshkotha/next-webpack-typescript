import React from 'react'
import type { Metadata } from 'next'

export async function generateMetadata({params}) {
    return {
      title: "About page",
      description: 'this is about page'
    }
}



const About = () => {
  return (
    <div>About Page</div>
  )
}

export default About