import React, { FC } from 'react';

interface IProps {
  title: string;
}

const CustomBadge3: FC<IProps> = ({ title }) => {

  const statusClasses =
    title === 'completed' ? 'bg-lightGreen text-success' :
      title === 'pending' ? 'bg-lightYellow text-yellow' :
        title === 'canceled' ? 'bg-lightRed text-red' :
          '';

  return (
    <div className={`py-1 px-2 rounded-lg w-fit text-sm ${statusClasses}`}>
      {title === 'completed' ? 'تایید شده' : title === 'pending' ? 'در انتظار' : title === 'canceled' ? 'تایید نشده' : ''}
    </div>
  );
};

export default CustomBadge3;