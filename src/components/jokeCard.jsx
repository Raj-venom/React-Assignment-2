import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import "@fontsource/inter";
import { MdVerified } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { RiShare2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

function JokeCard({ joke, time, views, likes, comments, bookmark, retweets }) {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className='w-[524px] h-[273px] bg-[#000000] rounded-[12px] '>
      <div className='flex gap-5 items-center px-6 py-4'>
        <FaArrowLeftLong className='text-[#FFFFFF] ' />
        <h2 className='w-[45px] h-[24px] leading-[19px] text-[16px] font-[700] text-white'>Post</h2>
      </div>

      <div className='px-6 flex   justify-between '>
        <div className=' flex gap-2'>

          <div className='rounded-[200px] h-[50px] w-[50px] bg-cover bg-[url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy5QMODyHm-LaMpgXOqMIUHPbQ-Y51jAZR_UJYC-9Dv1IL3ovh")]' ></div>
          <div className='mt-1'>
            <div className='flex gap-1'>
              <h2 className='text-[14px] font-[700] leading-[17px] text-white'>Elon Musk</h2>
              <MdVerified className='text-[#1DA1F2] ' />
            </div>
            <p className='text-[12px] font-[400] leading-[14px] tracking-[-0.02em] text-[#A0A0A0] '>@elonmusk</p>
          </div>

        </div>
        <div>
          <BsThreeDots className='text-[#A0A0A0] ' />
        </div>
      </div>

      <div className='w-[550px] h-[43px] px-6 mt-3' >
        <h2 className='text-[14px] font-[400] leading-[17px] tracking-[-0.02em] text-white'>
          {joke}
        </h2>
      </div>
      <div className=' px-6 mt-3'>
        <h2 className='text-[#A0A0A0] font-[400] leading-[12px] tracking-[-0.02em] text-[10px]'>
          {time} ·
          <span className='text-white font-[600] leading-[12px] tracking-[-0.02em] text-[10px] '>  {views}M </span>
          Views
        </h2>
      </div>

      <div className='w-[477px] flex items-center justify-between  border-t-[0.5px] border-b-[0.5px] py-3 px-3 mt-4 mx-6 border-t-[#A0A0A0] border-b-[#A0A0A0] '>


        <div className='mx-3 items-center flex gap-1'>
          <FaRegComment color='#71767B' className='w-[9px] h-[9px]' />
          <p className='text-[8px] font-[400] tracking-[-0.02em] leading-[9.68px] text-[#71767B] '>{comments}</p>
        </div>
        <div className='mx-3 items-center flex gap-1'>
          <img src="share.png" alt="" />
          <p className='text-[8px] font-[400] tracking-[-0.02em] leading-[9.68px] text-[#71767B] '>{retweets}</p>
        </div>

        <div className='mx-3 items-center flex gap-1'>
          <FaRegHeart color='#71767B' className='w-[9px] h-[9px]' />
          <p className='text-[8px] font-[400] tracking-[-0.02em] leading-[9.68px] text-[#71767B] '>{likes}</p>
        </div>

        <div className='mx-3 items-center flex gap-1'>
          <FaRegBookmark color='#71767B' className='w-[9px] h-[9px]' />
          <p className='text-[8px] font-[400] tracking-[-0.02em] leading-[9.68px] text-[#71767B] '>{bookmark}</p>
        </div>

        <div className='mx-3 items-center flex gap-1'>
          <RiShare2Line color='#71767B' className='w-[9px] h-[9px]' />
        </div>
      </div>

      {/* <div className='w-[477px] h-0 border-[0.5px] mt-1 mx-6 border-[#A0A0A0]'></div> */}

    </div>
  )
}

export default JokeCard


