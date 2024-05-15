import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ProductBox() {
  return (
    <>
        <h1 className='text-bg-warning text-center'>Product</h1>
        <Outlet></Outlet>
    </>
  )
}
