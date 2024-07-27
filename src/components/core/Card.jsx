import React from 'react';

const Card = ({title, data, icon}) => {
  return (
    <div className='h-[8em] w-[18em] p-2 shadow-lg shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] rounded-lg bg-[#f3f4f6]'>
      <div className='flex p-7'>
        <div className='aspect-square w-[30px] rounded-full object-cover mt-3'>
          {icon}
        </div>
          <div className='font-bold pl-6 flex-row text-sm'>
            {title}
            <div className='text-sm mt-1.5'>
              {data}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Card;