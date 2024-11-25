import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="h-16 bg-blue-700 flex justify-between px-3 items-center text-white">
        <div className="logo font-bold text-lg">
            <Link href="/">Shortify</Link>
        </div>
        <ul className="flex justify-center items-center gap-4">
            <Link className="hover:font-bold" href="/#"><li>Home</li></Link>
            <Link className="hover:font-bold" target="__blank" href="https://agnibhamukherjee.netlify.app"><li>About</li></Link>
            <Link className="hover:font-bold" target="__blank" href="https://agnibhamukherjee.netlify.app/#contact"><li>Contact Us</li></Link>
            <Link className="hover:font-bold" href="/shorten"><li>Shorten</li></Link>
            <li className="flex gap-3">
                <Link href="/shorten"><button className='bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                <Link href="/github"><button className='bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
