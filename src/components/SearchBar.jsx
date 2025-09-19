import React from 'react'
import CloseIcon from './icons/CloseIcon'
import { motion } from 'motion/react'

function SearchBar({ isSearchBarOpen, setIsSearchBarOpen }) {
    return (
        <motion.div
            initial={{
                y: -80,
                opacity: 0,
            }}
            animate={{
                y: isSearchBarOpen ? 0 : -80,
                opacity: isSearchBarOpen ? 1 : 0,
            }}
            transition={{
                type: 'tween',
                duration: 0.1,
            }}
            className='fixed top-0 z-10 flex items-center justify-center w-full bg-[#f3f3f3] gap-2 px-[16px] py-[20px]'>
            <input className='border border-[#262626] px-[15px] py-[10px] w-full be-vietnam-pro-medium tracking-wider text-[14px] leading-normal placeholder-gray-400' type="text" placeholder='Search' />
            <CloseIcon setIsSearchBarOpen={setIsSearchBarOpen} />
        </motion.div>
    )
}

export default SearchBar