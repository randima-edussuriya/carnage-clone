import React from 'react'
import PlusIcon from './icons/PlusIcon'

function SideMenuItem({ name, subItem, leftIcon, noBorder }) {
    return (
        <div className={`flex justify-between items-center py-[22px] w-full border-gray-400 ${noBorder ? '' : 'border-b'} cursor-pointer`}>
            <div className='be-vietnam-pro-semibold uppercase text-[14px] tracking-wider flex items-center gap-2'>
                {leftIcon && leftIcon}
                {name}
            </div>
            {subItem?.length > 0 && <PlusIcon />}
        </div>
    )
}

export default SideMenuItem