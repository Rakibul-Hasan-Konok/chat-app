import React from 'react'
import assets from '../assets/assets'

const ChatContainer = ({selectedUser,setSelectedUser}) => {
  return (
    <div className='h-full overflow-scroll relative blackdrop-blur-lg'>
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'></div>
      <img src={assets.profile_martin} alt="" className='w-8 rounded-full'/>
      <p className='flex-1 text-lg text-white flex items-center gap-2'>
        Martin Johnson
        <span className='w- h-2 rounded-full bg-green-500'></span>
      </p>
      <img src={assets.arrow_icon} alt="" className='md:hidden max-w-7'/>
    </div>
  )
}

export default ChatContainer
