import { Eye, Mail, Smartphone } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    helperText?: string;
    linkHref?: string;
    linkTitle?: string;
    iconName?: 'Mail' | 'Eye' | 'Smartphone';
}

const FormInput: FC<IProps> = ({ type, placeholder, helperText, linkHref, linkTitle, iconName, ...rest }) => {
    const iconComponents = {
        Mail: <Mail size={20} />,
        Eye: <Eye size={20} />,
        Smartphone: <Smartphone size={20} />,
    };

    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex w-full gap-2 p-5 max-sm:p-3 items-center rounded-[40px] bg-[#F5F5F5]">
                <input
                    type={type}
                    placeholder={placeholder}
                    {...rest}
                    className='w-full outline-0 max-sm:text-sm'
                />
                <span className="text-[#777777]">
                    {iconName && iconComponents[iconName]}
                </span>
            </div>

            {helperText && <p className="text-sm max-sm:text-xs text-red-500">{helperText}</p>}

            {linkHref && (
                <Link href={linkHref} className="text-sm max-sm:text-xs text-[#0D3B66]">
                    {linkTitle || 'Link'}
                </Link>
            )}
        </div>
    );
};

export default FormInput;