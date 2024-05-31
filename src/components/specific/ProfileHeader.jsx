import React from 'react'

function ProfileHeader({name, balance, avatar="/images/default-avatar.jpg"}) {
  return (
    <div className='shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] h-[28rem] rounded-lg overflow-hidden'>
        <div className=' h-1/2 profile-gradient'></div>
        <div className='flex flex-col items-center justify-center '>
            
            <img src={avatar} alt="user's avatar" className='w-32 h-32 -mt-16 border-4 border-white rounded-full'/>
            <p className='my-3 text-3xl font-bold'>{name}</p>
            <p className='text-2xl'><i class="bi bi-cash-stack text-green-500 mr-3"></i>{balance} KGS</p>
        </div>
    </div>
  )
}

export default ProfileHeader