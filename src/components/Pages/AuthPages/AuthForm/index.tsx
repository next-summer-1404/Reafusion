import React, { FC, ReactNode } from 'react'

interface IChildren {
    children: ReactNode;
    submit: (e: React.FormEvent) => void;
}

const AuthForm: FC<IChildren> = ({ children, submit }) => {
    return (
        <form
            onSubmit={submit}
            className='box-border h-full w-full flex flex-col justify-center items-center gap-10 px-12 py-6 text-[#1E2022]'>
            {children}
        </form>
    )
}

export default AuthForm