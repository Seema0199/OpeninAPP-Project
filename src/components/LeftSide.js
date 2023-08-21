import React from 'react'

function LeftSide({data,className}) {
  return (
     <div className='w-full flex items-center gap-8 cursor-pointer '>
        <img src={data.img} />
        <p className={`text-white  text-lg ${className}`}>{data.name}</p>
    </div>
  )
}

export default LeftSide