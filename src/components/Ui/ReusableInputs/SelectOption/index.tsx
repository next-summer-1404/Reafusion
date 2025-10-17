import React, { FC } from 'react';

interface Option {
  value: string;
  label: string;
}

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelText: string;
  customClass?: string;
  name?: string;
  value?: string;
  setState?: (value: string) => void;
  options: Option[];
}

const CustomSelectOption: FC<IProps> = ({
  customClass,
  labelText,
  name,
  options,
  value,
  setState,
  ...rest
}) => {
  return (
    <div className={`${customClass} flex flex-col gap-4 w-[250px] max-sm:w-full`}>
      <label className='text-[#1E2022] font-bold'>{labelText}</label>
      <div className='bg-[#F5F5F5] h-[46px] rounded-[40px] px-5'>
        <select
          value={value}
          onChange={(event) => setState && setState(event.target.value)}
          name={name}
          className='w-full h-full py-3 outline-0'
          {...rest}
        >
          <option value="">همه</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomSelectOption;
