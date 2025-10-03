import React from "react";

interface IChildren {
    children: React.ReactNode;
    action?: (formData: FormData) => Promise<void>;
}

function AuthForm({ children, action }: IChildren) {
    return (
        <form
            action={action}
            className="box-border h-full w-full flex flex-col justify-center items-center px-12 py-6 gap-8 max-sm:p-3 text-[#1E2022]
            "
        >
            {children}
        </form>
    );
}

export default AuthForm;