'use client'
import { useRouter } from "next/navigation";
import React, { FC, useActionState, useEffect } from "react";
import { toast } from "react-toastify";

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
  token?: string;
  error?: string;
}

const AuthForm: FC<IChildren> = ({ children, action }) => {
  const initialState: FormState = { message: "" };
  const [state, formAction] = useActionState(action as (state: FormState, formData: FormData) => Promise<{ message: string, redirect?: string, email?: string, resetCode?: string, tempUserId?: string, userId?: string, token?: string, error?: string;}>, initialState);
  console.log(state)
  const router = useRouter(); 
   
  useEffect(() => {
    if (state.message === 'عملیات با موفقیت انجام شد' && state.redirect) {
      toast.success('عملیات با موفقیت انجام شد')
      router.push(state.redirect);
      sessionStorage.setItem('userEmail', state.email as string)
      sessionStorage.setItem('resetCode', state.resetCode as string)
      sessionStorage.setItem('tempUserId', state.tempUserId as string)
      sessionStorage.setItem('userId', state.userId as string)  
    } else if (state.message && state.message !== 'عملیات با موفقیت انجام شد') {
      toast.error(state.message || 'خطا در پردازش اطلاعات')
    }
  }, [state, router]);

  return (
    <form
      action={formAction}
      className="box-border h-full w-full flex flex-col justify-center items-center px-12 py-6 gap-8 max-sm:p-3 text-dark"
    >
      {children}
    </form>
  );
};

export default AuthForm;