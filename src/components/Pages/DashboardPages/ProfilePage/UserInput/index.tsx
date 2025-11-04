import React, { FC } from "react";

interface IProps {
  lable: string;
  placeholder: string;
  name?: string;
}

const UserInput: FC<IProps> = ({ lable, placeholder, name }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-dark text-[16px]">{lable}</h3>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="text-dark p-2.5 outline-0 indent-2 bg-whiteColor rounded-[16px] border border-borderColor w-[500px]"
      />
    </div>
  );
};

export default UserInput;
