import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";
import "@fontsource/dm-serif-text";
import "@fontsource/donegal-one";



function ProfileCard() {
  return (
    <div>
      <div className=' bg-[#B6B3F3] w-[358px] h-[610px] rounded-[8px] border-8 border-white '>
        <div className='flex items-center justify-between px-2 mt-6 '>
          <FaArrowLeftLong className='w-[16px] h-[12px]' />
          <h2 className='text-[16px] font-[400] leading-[21.94px] ' style={{ fontFamily: "'DM Serif Text', serif" }}>Profile overview</h2>
          <TbReload color='#000000' className='w-[16px] h-[16px]' />
        </div>

        {/* // profile */}
        <div className='flex justify-center ml-7 mt-8'>
          <img className='w-[100px] h-[100px] rounded-[64px]' src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" alt="profile" />
          <div className='w-[27px] h-[20px] rounded-[12px]  items-center justify-center flex bg-black  '>
            <h2 style={{ fontFamily: "'DM Serif Text', serif" }} className='w-[18px] h-[8px] font-[400] leading-[11px] items-center text-white '>Mr</h2>
          </div>
        </div>

        {/* // name */}
        <div className='flex flex-col mt-2  items-center justify-center'>
          <h2 style={{ fontFamily: "'Donegal One', serif" }} className=' font-semibold  leading-[30px] tracking-[4%] items-center text-black  '>Tom Garza</h2>
          <h2 className='mt-2 font-[400] leading-[16px] tracking-[4%] '>beautifulkoala355</h2>
        </div>

        <div className='w-[326px] text-[#00000014] border mt-6 ml-2'></div>
        <div className='w-[326px] border mt-6 ml-2'></div>

      </div>
    </div>
  )
}

export default ProfileCard