import Insert from '@/app/comp/Insert'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
      <h2>insert</h2>
      <Insert/>

      <Link href="/">Home</Link>
      <Link href="./list">List보기</Link>
    </>
  )
}

export default page