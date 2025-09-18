import React from 'react'
import logo from '../assets/logo.jpg'
import SearchIcon from './icons/SearchIcon'
import CartIcons from './icons/CartIcons'
import HamBurgerIcon from './icons/HamBurgerIcon'

function NavBar() {
    return (
        <div className='flex justify-between items-center px-4 min-h-[64px]'>
            <img src={logo} className='w-[80px] h-[20px]' />
            <div className='flex items-center gap-4'>
                <SearchIcon />
                <CartIcons />
                <HamBurgerIcon />
            </div>
        </div>
    )
}
 
export default NavBar