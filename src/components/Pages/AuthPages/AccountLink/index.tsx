import Link from 'next/link'
import React, { FC } from 'react'

interface IProps {
  desc: string;
  linkTitle: string;
  linkHref: string;
}

const AccountLink: FC<IProps> = ({ desc, linkTitle, linkHref }) => {
  return (
    <div className='text-center max-sm:text-xs'>
      <span>{desc + " "}</span>
      <Link className='text-primary' href={linkHref}>{linkTitle}</Link>
    </div>
  )
}

export default AccountLink