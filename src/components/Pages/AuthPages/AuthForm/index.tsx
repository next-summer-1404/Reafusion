import React from "react";

interface IChildren {
    children: React.ReactNode;
    action?: (formData: FormData) => Promise<void>;
}

function AuthForm({ children, action }: IChildren) {
    return (
        <form
            action={action}
            className="box-border h-full w-full flex flex-col justify-center items-center gap-10 px-12 py-6 text-[#1E2022]"
        >
            {children}
        </form>
    );
}

export default AuthForm;