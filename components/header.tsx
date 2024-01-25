import React from 'react'
import Logo from './logo'
import { DarkModeToggle } from './DarkModeToggle'
import UserButton from './UserButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'

const Header = async() => {
  const session = await getServerSession(authOptions);
  console.log(session)
  return (
      <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
          <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
              <Logo/>
        <div className='flex-1 flex items-center justify-end space-x-4'>
          {/* LanguageSelect */}
          {/* Sessions && () */}
          {/* Dark Mode Toggle */}
          <DarkModeToggle/>
          {/* User Button */}
          <UserButton/>
          
              </div>
      </nav>
      {/* Upgrade Banner */}
      
    </header>
  )
}

export default Header
