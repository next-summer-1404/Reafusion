import React, { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode;
  className?: string;
}

const Container: FC<IProps> = ({ children, className = "" }) => {
  return (
    <div className={`px-12 py-6 max-xl:px-4 max-sm:px-2 ${className}`}>
        {children}
    </div>
  )
}

export default Container