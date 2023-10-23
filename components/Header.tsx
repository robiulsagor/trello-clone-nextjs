"use client"

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { UserIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import Avatar from 'react-avatar'

const Header = () => {
    const [search, setSearch] = useState("")

    return (
        <header>
            <div className='flex flex-col md:flex-row items-center  justify-between p-5 bg-gray-500/10 rounded-b-2xl'>

                <div
                    className='absolute left-0 top-0 h-96 w-full bg-gradient-to-br from-pink-400 to-[#0055d1] blur-3xl filter opacity-50 -z-40 rounded-md'
                />
                <Image
                    src="/trello.png"
                    alt='logo'
                    width={300}
                    height={5}
                    className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
                />

                <div className='flex space-x-5 w-full justify-end'>
                    {/* search box */}
                    <form className='flex items-center spacex-5 bg-white px-2 py-1 rounded-lg flex-1 md:flex-initial shadow-md '>
                        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
                        <input type="text"
                            className='flex-1 bg-transparent outline-none p-2'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder='Search' />
                        <button hidden>Search</button>
                    </form>

                    {/* Avatar */}
                    <Avatar name='Robiul Islam' round color='#0055d1' size='50' />
                </div>
            </div>

            <div className='flex items-center justify-center px-5 py-2 md:py-5'>
                <p className='p-5 text-sm italic text-[#0055d1]  shadow-lg rounded-lg pr-5 pl-2 w-fit max-w-3xl bg-white'>
                    <UserCircleIcon className='h-10 w-10 inline-block text-[#0055d1] mr-1' />
                    ChatGPT is summarizing your tasks for the day...
                </p>
            </div>
        </header>
    )
}

export default Header
