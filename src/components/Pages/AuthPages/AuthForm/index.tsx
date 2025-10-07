'use client'
import { useRouter } from "next/navigation";
import React, { FC, useActionState, useEffect } from "react";

interface IChildren {
  children: React.ReactNode;
  action?: (state: FormState, formData: FormData) => Promise<{ message: string | void }>;
}
interface FormState {
  message: string;
  redirect?: string
  email?: string
  resetCode?: string;
  tempUserId?: string;
  userId?: string;
}

const AuthForm: FC<IChildren> = ({ children, action }) => {
  const initialState: FormState = { message: "" };
  const [state, formAction] = useActionState(action as (state: FormState, formData: FormData) => Promise<{ message: string, redirect?: string, email?: string, resetCode?: string, tempUserId?: string, userId?: string}>, initialState);
  console.log(state)
  const router = useRouter(); 
   
  useEffect(() => {
    if (state.message === 'عملیات با موفقیت انجام شد' && state.redirect) {
      router.push(state.redirect);
      sessionStorage.setItem('userEmail', state.email as string)
      sessionStorage.setItem('resetCode', state.resetCode as string)
      sessionStorage.setItem('tempUserId', state.tempUserId as string)
      sessionStorage.setItem('userId', state.userId as string)
    }
  }, [state, router]);

  return (
    <form
      action={formAction}
      className="box-border h-full w-full flex flex-col justify-center items-center px-12 py-6 gap-8 max-sm:p-3 text-[#1E2022]"
    >
      {children}
    </form>
  );
};

export default AuthForm;