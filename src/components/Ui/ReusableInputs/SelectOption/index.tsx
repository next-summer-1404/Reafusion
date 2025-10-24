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
    <div className={`${customClass} flex flex-col gap-4 w-[250px] max-sm:!w-full`}>
      <label className='text-dark font-bold dark:text-white'>{labelText}</label>
      <div className='bg-lightGray h-[46px] rounded-[40px] px-5'>
        <select
          value={value}
          onChange={(event) => setState && setState(event.target.value)}
          name={name}
          className='w-full h-full py-3 dark:text-primary outline-0'
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
