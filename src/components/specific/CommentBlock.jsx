import React from 'react'

function CommentBlock({image, name, text, opacity}) {
  return (
    <div className='bg-white rounded-xl flex max-w-[730px] py-7 px-9 space-x-7 text-dark-200 items-center mb-5' style={{opacity:opacity}}>
        <img src={image} alt="avatar" className='rounded-full w-[111px] h-[111px]'/>
        <div className=''>
            <p className='text-xl mb-5'>{`"${text}"`}</p>
            <span>{name}</span>
        </div>
    </div>
  )
}

export default CommentBlock