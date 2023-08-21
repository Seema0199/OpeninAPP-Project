import React from 'react'

function Box({data}) {
  return (
    <div className={`p-5 rounded-2xl  flex flex-col ${data.color}  gap-1`}>
        <img src={data.img} className='self-end' />
    <p className='text-sm'>{data.name}</p>
    <div className='font-bold text-2xl'>{data.amount}</div>
    </div>
  )
}
export default Box