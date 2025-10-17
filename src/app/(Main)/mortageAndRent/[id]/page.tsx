import React, { FC } from 'react'

interface IProps {
  params: {
    id: string,
  }
}

const MortageAndRentDetail: FC<IProps> = ({ params }) => {
  return (
    <div>MortageAndRentDetail {params.id}</div>
  )
}

export default MortageAndRentDetail