
"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {
  const router = useRouter()
  return (
    <div>
       <div>
        <button onClick={() => router.back()}>Back</button>
      </div>
    </div>
  )
}

export default BackButton