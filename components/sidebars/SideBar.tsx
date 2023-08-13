

import Image from 'next/image'
import React from 'react'

export const SideBar = ({sidebarWidth}: any) => {
  return (
    <div className={[`w-[${sidebarWidth}] h-full bg-black/50 overflow-hidden transition-all`].join(' ')}>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert mx-auto mt-8"
        width={100}
        height={24}
        priority
      />

      <div className='mt-10 space-y-1'>
        <p className='py-2 px-4 hover:bg-blue-200 cursor-pointer'>Dashboard</p>
        <p className='py-2 px-4 hover:bg-blue-200 cursor-pointer'>Dashboard</p>
        <p className='py-2 px-4 hover:bg-blue-200 cursor-pointer'>Dashboard</p>
        <p className='py-2 px-4 hover:bg-blue-200 cursor-pointer'>Dashboard</p>
        <p className='py-2 px-4 hover:bg-blue-200 cursor-pointer'>Dashboard</p>
      </div>
    </div>
  )
}
