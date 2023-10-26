"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const param = useParams();
  return (
    <div>동적 라우팅{param.id}</div>
  )
}
