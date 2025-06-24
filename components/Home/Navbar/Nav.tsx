'use client'
import { Navlinks } from '@/constant/constant'
import React, { useEffect } from 'react'
import { MdDeliveryDining } from 'react-icons/md'
import { HiBars3BottomRight } from 'react-icons/hi2'
import ThemeToggler from '@/components/Helper/ThemeToggler'
import { Link as ScrollLink } from 'react-scroll'
type Props = {
  openNav: () => void
}
const Nav = ({openNav}: Props) => {

  const [navBg, setNavBg] = React.useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true)
      }
      else{
        setNavBg(false)
      }
      
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return (
    <div className={`${navBg ? 'bg-white dark:bg-gray-900 shadow-md' : 'fixed' } transition-all duration-200 h-[12vh] z-[100] fixed w-full `}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto '>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-blue-950 dark:bg-white  rounded-full flex items-center justify-center flex-col '>
            <MdDeliveryDining className='w-6 h-6 dark:text-blue-950 text-white ' />
          </div>
          <h1 className='dark:text-white text-xl hidden sm:block md:text-2xl text-black font-bold'>Foodie</h1>
        </div>
        {/* NavLinks */}
       <div className='hidden lg:flex items-center space-x-10'>
         {Navlinks.map((link) => {
          return (
            <ScrollLink to={link.url} smooth spy key={link.id}>
              <p className='text-black dark:text-white hover:text-green-700 dark:hover:text-green-400 font-bold transition-all duration-200'>{link.text}</p>
            </ScrollLink>
          )
        })}
       </div>
       {/* buttons */}
       <div className='flex items-center space-x-4'>
        {/* join Now button */}
        <button className='bg-blue-950 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-8 py-2.5 text-white font-bold rounded-lg hover:bg-black transition-all duration-300 cursor-pointer'>Join Now</button>
        {/* Theme Toggler */}
        <ThemeToggler />
        {/* Menu Icon */}
        <HiBars3BottomRight onClick={openNav} className='lg:hidden w-8 h-8 cursor-pointer dark:text-white text-blue-950' />
       </div>
      </div>
    </div>
  )
}

export default Nav