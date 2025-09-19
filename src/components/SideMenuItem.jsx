import React from 'react'
import PlusIcon from './icons/PlusIcon'

function SideMenuItem({ name, subItem }) {
    return (
        <div className='flex justify-between items-center'>
            <div className='be-vietnam-pro-semibold uppercase text-[14px] tracking-wider'>
                {name}
            </div>
            {subItem && subItem.length > 0 && <PlusIcon />}
        </div>
    )
}

export default SideMenuItem