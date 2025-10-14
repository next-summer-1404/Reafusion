import React, { FC } from 'react'

interface IProps {
  params: { id: string }
}

const FastReserveDetailPage: FC<IProps> = ({ params }) => {
  return (
    <div>page {params.id}</div>
  )
}

export default FastReserveDetailPage