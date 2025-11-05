import React, { FC } from 'react';

interface IProps {
  status: 'success' | 'pending' | 'fail';
  title: string;
}

const CustomBadge: FC<IProps> = ({ status, title, }) => {

  const statusClasses =
    status === 'success' ? 'bg-lightGreen text-success' :
      status === 'pending' ? 'bg-lightYellow text-yellow' :
        status === 'fail' ? 'bg-lightRed text-red' :
          '';

  return (
    <div className={`py-1 px-2 rounded-lg w-fit text-sm ${statusClasses}`}>
      {title}
    </div>
  );
};

export default CustomBadge;