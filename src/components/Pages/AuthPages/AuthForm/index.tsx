'use client'
import React, { FC, useActionState, useEffect } from "react";

interface IChildren {
  children: React.ReactNode;
  action?: string | ((state: FormState, formData: FormData) => Promise<{ message: string }>);
}
interface FormState {
  message: string;
}

const AuthForm: FC<IChildren> = ({ children, action }) => {
  const initialState: FormState = { message: "" };
  const [state, formAction] = useActionState(action as (state: FormState, formData: FormData) => Promise<{ message: string }>, initialState);
  console.log(state)
  
  useEffect(() => {
    if (state.message === "ورود موفقیت‌آمیز بود") {
      window.location.href = "/";
    }
  }, [state]);

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