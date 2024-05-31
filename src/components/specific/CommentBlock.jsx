import React from 'react'

function CommentBlock({image, name, text, opacity}) {
  return (
    <div className='bg-white rounded-xl flex max-w-[730px] py-7 px-9  text-dark-200 items-center mb-5 lg:flex-row flex-col gap-7 text-center lg:text-start' style={{opacity:opacity}}>
        <img src={image} alt="avatar" className='rounded-full w-[111px] h-[111px]'/>
        <div className=''>
            <p className='mb-5 text-base md:text-xl'>{`"${text}"`}</p>
            <span>{name}</span>
        </div>
    </div>
  )
}

export default CommentBlock