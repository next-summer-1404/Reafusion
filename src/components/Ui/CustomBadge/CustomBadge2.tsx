import React, { FC } from 'react';

interface IProps {
  title: string;
}

const CustomBadge2: FC<IProps> = ({ title, }) => {

  const statusClasses =
    title === 'confirmed' ? 'bg-lightGreen text-success' :
    title === 'pending' || 'canceled' ? 'bg-lightRed text-red' : ''

  return (
    <div className={`py-1 px-2 rounded-lg w-fit text-sm ${statusClasses}`}>
      {title === 'confirmed' ? 'پرداخت شده' : title === 'pending' || 'canceled' ? 'پرداخت نشده' : ''}
    </div>
  );
};

export default CustomBadge2;