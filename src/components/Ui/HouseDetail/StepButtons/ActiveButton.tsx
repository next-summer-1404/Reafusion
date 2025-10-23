import React, { FC } from 'react'

interface IProps {
  ButtonText: string;
}

const ActiveButton: FC<IProps> = ({ ButtonText }) => {
  return (
    <button className='bg-[#0D3B66] p-2.5 px-7 flex justify-center items-center 
                     text-white text-[20px] rounded-[40px] cursor-pointer'>
      {ButtonText}
    </button>
  )
}

export default ActiveButton