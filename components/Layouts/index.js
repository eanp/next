import React from 'react'
import Link from 'next/link'

const Layouts = ({children}) => {
  return (
    <>
    <nav className='navbar navbar-expand bg-light d-flex flex-row text-dark justify-content-around mb-5'>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/recipe/3">recipe 3</Link>
        <Link href="/user">user</Link>
    </nav>
    <div className='container bg-light text-dark'>
        {children}
    </div>
    </>
  )
}

export default Layouts