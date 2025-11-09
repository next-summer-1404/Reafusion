import React, { FC } from 'react';

interface IProps {
  title: string;
}

const CustomBadge: FC<IProps> = ({ title }) => {

  const statusClasses =
    title === 'confirmed' ? 'bg-lightGreen text-success' :
      title === 'pending' ? 'bg-lightYellow text-yellow' :
        title === 'canceled' ? 'bg-lightRed text-red' :
          '';

  return (
    <div className={`py-1 px-2 rounded-lg w-fit text-sm ${statusClasses}`}>
      {title === 'confirmed' ? 'تایید شده' : title === 'pending' ? 'در انتظار' : title === 'canceled' ? 'تایید نشده' : ''}
    </div>
  );
};

export default CustomBadge;