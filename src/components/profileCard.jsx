import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";
import { BsGeoAltFill } from "react-icons/bs";
import "@fontsource/dm-serif-text";
import "@fontsource/donegal-one";
import "@fontsource/dm-sans";
import { IoCallOutline } from "react-icons/io5"
import WorldFlags from 'react-world-flags';


function ProfileCard({ name, title, username, nationality, city, dob, phone, image, registered, timezone, handleClick }) {
  return (
    <div>
      <div className=' relative bg-[#B6B3F3] w-[358px] h-[610px] rounded-[12px] border-8 border-white '>
        <div className='flex items-center justify-between px-5 mt-6 '>
          <FaArrowLeftLong className='w-[16px] h-[12px] cursor-pointer ' />
          <h2 className='text-[16px] font-[400] leading-[21.94px] ' style={{ fontFamily: "'DM Serif Text', serif" }}>Profile overview</h2>
          <TbReload onClick={handleClick} color='#000000' className='w-[16px] h-[16px] cursor-pointer' />
        </div>

        {/* // profile */}
        <div className='flex justify-center ml-7 mt-8'>
          <img className='w-[100px] h-[100px] rounded-[64px]' src={image} alt="profile" />
          <div className='w-[27px] h-[20px] rounded-[12px]  items-center justify-center flex bg-black  '>
            <h2 style={{ fontFamily: "'DM Serif Text', serif" }} className='w-[18px] h-[8px] font-[400] leading-[11px] items-center text-white '>{title}</h2>
          </div>
        </div>

        {/* // name */}
        <div className='flex flex-col mt-2  items-center justify-center'>
          <h2 style={{ fontFamily: "'Donegal One', serif" }} className=' font-semibold  leading-[30px] tracking-[4%] items-center text-black  '>{name}</h2>
          <h2 className='mt-2 font-[400] leading-[16px] tracking-[4%] '>{username}</h2>
        </div>

        <div className='w-[300px] flex items-center gap-4 justify-center border-[#0000002a] border-b-2 py-2 border-t-2 mt-4 ml-6'>
          <div className='flex items-center gap-1 justify-center'>
            <div className='w-[22px] h-[22px] rounded-full bg-black items-center justify-center flex '>
              <BsGeoAltFill color='white' className='w-[11px] h-[13.75px] ' />
            </div>
            <h2 className='leading-[11.72px] items-center text-[#000000B2]' style={{ fontFamily: "'DM Sans', sans-serif" }} >Location</h2>
          </div>

          <div className='flex items-center gap-1 justify-center'>
            <div className='w-[22px] h-[22px] rounded-full bg-black items-center justify-center flex '>
              <IoCallOutline color='white' className='w-[11px] h-[11px] ' />
            </div>
            <h2 className='leading-[11.72px] font-[500] text-[#000000B2] items-center' style={{ fontFamily: "'DM Sans', sans-serif" }} >Call me</h2>
          </div>
        </div>

        {/* Full details  */}
        <div className=' ml-10 px-1'>

          <div className=' mt-4 grid grid-cols-2 gap-2 gap-x-16'>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif" }} className=' text-[9px] font-[400] leading-[11px] text-[#000000B2]'>City</p>
              <h2 style={{ fontFamily: "'DM Serif Text', serif" }} className='font-[400]  text-[14px] leading-[24px] text-[#000000B2]'>{city}</h2>
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif" }} className=' text-[9px] font-[400] leading-[11px] text-[#000000B2]'>Nationality</p>
              <h2 style={{ fontFamily: "'DM Serif Text', serif" }} className='font-[400] text-[14px]  leading-[24px] text-[#000000B2]'>
                <WorldFlags code={nationality} alt={nationality} className='inline-block w-[20px] h-[14px]' />
                {' '}{nationality}
              </h2>
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif" }} className=' text-[9px] font-[400] leading-[11px] text-[#000000B2]'>Date of birth</p>
              <h2 style={{ fontFamily: "'DM Serif Text', serif" }} className='font-[400] text-[14px]  leading-[24px] text-[#000000B2]'>{dob}</h2>
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif" }} className=' text-[9px] font-[400] leading-[11px] text-[#000000B2]'>Phone No.</p>
              <h2 style={{ fontFamily: "'DM Serif Text', serif" }} className='font-[400] text-[14px]  leading-[24px] text-[#000000B2]'>{phone}</h2>
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif" }} className=' text-[9px] font-[400] leading-[11px] text-[#000000B2]'>Time Zone</p>
              <h2 style={{ fontFamily: "'DM Serif Text', serif" }} className='font-[400] text-[14px]  leading-[24px] text-[#000000B2]'>{timezone}</h2>
            </div>
            <div >
              <p style={{ fontFamily: "'DM Sans', sans-serif" }} className=' text-[9px] font-[400] leading-[12px] text-[#000000B2]'>Registered Since</p>
              <h2 style={{ fontFamily: "'DM Serif Text', serif" }} className='font-[400] text-[14px]  leading-[24px] text-[#000000B2]'>{registered}</h2>
            </div>
          </div>

        </div>
        <div className='right-5 bottom-10 absolute'>
          <a href="https://chaicode.com/" target="_blank">
            <img src="chai.png" className='w-[60px] h-[62px]' alt="" />
          </a>
        </div>
      </div>

    </div>
  )
}

export default ProfileCard