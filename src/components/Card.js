import React from 'react'

export const Card = ({member}) => {
  return (
    <div className='border d-flex p-2'>
        <img src={member.profile} alt={member.name}/>
        <div className='p-2 text-start d-flex flex-column'>
            <div className='fs-5'>{member.name}</div>
            <div className='fs-6'>{member.address}</div>
        </div>
    </div>
  )
}
