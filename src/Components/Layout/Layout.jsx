import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import AppNavbar from '../Navbar/Navbar'

export default function Layout() {
  return (
    <>
    <main className='bg-gray-300 min-h-screen'>
      <AppNavbar/>
    <Outlet/>
    </main>
    </>
  )
}
