import React from 'react'
import logo from '../assets/logo.jpg'
import CloseIcon from './icons/CloseIcon'
import SideMenuItem from './SideMenuItem'

const menuItems = [
    {
        name: 'MEN',
        subItem: ['SHOP ALL', 'TANKS', 'COMPRESSIONS', 'HOODIES & JACKETS', 'SHORTS', 'JEANS', 'JOGGERS & PANTS', 'UNDERWEAR', 'COLLECTIONS'],
    },
    {
        name: 'WOMEN',
        subItem: ['SHOP ALL', 'T-SHIRTS', 'POLOS', 'CROP TOPS', 'TANKS', 'LEGGINGS', 'SKIRTS', 'SHORTS', 'HOODIES & JACKETS', 'JOGGERS & PANTS', 'ONE PIECE', 'SPORTS BRA', 'UNDERWEAR', 'COLLECTIONS'],
    },
    {
        name: 'ACCESSORIES',
        subItem: ['SHOP ALL', 'HATS & CAPS', 'SLIDES', 'JEWELLERY', 'SOCKS', 'BOTTLES & TUMBLERS', 'BAGS', 'MERCH'],
    },
    {
        name: 'GIFTS',
        subItem: [],
    }
]

function SideMenu() {
    return (
        <div className='fixed top-0 z-10 w-full h-screen bg-black/40'>
            <div className='bg-white/95 h-screen w-[80%] fixed top-0 right-0'>
                <div className='flex justify-between items-center min-h-[64px] px-4'>
                    <img src={logo} alt="logo" className='h-[20px] w-[80px]' />
                    <CloseIcon thinStroke='stroke-[1.5px]' />
                </div>
                {menuItems.length > 0 && menuItems.map(item => (
                    <SideMenuItem name={item.name} subItem={item.subItem} />
                ))}
                <SideMenuItem name='Account' />
            </div>
        </div>
    )
}

export default SideMenu