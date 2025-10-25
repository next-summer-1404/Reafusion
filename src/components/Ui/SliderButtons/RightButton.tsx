
import { IButtons } from '@/core/types/IButtons'
import { ChevronRight } from 'lucide-react'
import React, { FC } from 'react'

const RightButton: FC<IButtons> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-[50%] right-[-25px] max-sm:right-[0px] z-50 bg-primary rounded-full size-[56px] 
                       flex justify-center items-center text-White cursor-pointer">
          <ChevronRight size={40}/>
    </button>
  )
}

export default RightButton