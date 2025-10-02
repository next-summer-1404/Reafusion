
import { IButtons } from '@/core/types/IButtons'
import { ChevronRight } from 'lucide-react'
import React, { FC } from 'react'

const RightButton: FC<IButtons> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-[50%] right-[-25px] z-50 bg-[#0D3B66] rounded-full size-[56px] 
                       flex justify-center items-center text-white cursor-pointer">
          <ChevronRight size={40}/>
    </button>
  )
}

export default RightButton