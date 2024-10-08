import { SignInForm } from "@/components/forms/login-form";
import React from "react";

const LoginPage = () => {
    return (
        <div className='flex justify-center max-h-dvh px-5 h-fit py-24 lg:absolute lg:w-screen lg:max-w-full lg:px-0 lg:py-12"'>
            <SignInForm />
        </div>
    );
};

export default LoginPage;
