'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkUser = async () => {
      const res = await fetch('/api/user')
      if (res.ok) {
        const userData = await res.json()
        setUser(userData)
      }
    }
    checkUser()
  }, [])

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-lg text-white p-4 fixed top-0 left-0 w-full z-50 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">HACK SEC</Link>
        <div className="hidden md:flex space-x-4">
          
          <Link href="/about" className="hover:text-gray-300">About us</Link>
          <Link href="/coming-soon" className="hover:text-gray-300">Courses</Link>
          <Link href="/coming-soon" className="hover:text-gray-300">Certification</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact us</Link>
        </div>
      </div>
    </nav>
  )
}
