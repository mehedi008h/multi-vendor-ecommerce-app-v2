"use client";

import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

interface Props {
    label: string;
    id: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    value?: string;
    handleBlur: any;
    handleChange: any;
    errorMessage?: string | null;
}

const ChangePasswordField = ({
    label,
    id,
    disabled = false,
    required,
    value,
    handleBlur,
    handleChange,
    error,
    errorMessage,
}: Props) => {
    const [togglePassword, setTooglePassword] = useState<boolean>(false);

    // toggle password view
    const handleToogle = () => {
        setTooglePassword(!togglePassword);
    };
    return (
        <div className="my-8 grid grid-cols-12 items-center">
            {/* label  */}
            <div className="col-span-4">
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            </div>

            {/* input field & error message */}
            <div className="col-span-4 relative">
                <input
                    id={id}
                    type={togglePassword ? "text" : "password"}
                    disabled={disabled}
                    required={required}
                    value={value}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`px-2  w-full h-10 sm:text-sm border-[1px] rounded-md outline-none ${
                        error
                            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                            : "border-neutral-400 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                />

                {/* toogle icon  */}
                {togglePassword ? (
                    // close icon
                    <LuEyeOff
                        onClick={handleToogle}
                        className="absolute right-3 top-[10px] text-neutral-500 cursor-pointer"
                        size={20}
                    />
                ) : (
                    // view icon
                    <LuEye
                        onClick={handleToogle}
                        className="absolute right-3 top-[10px] text-neutral-500 cursor-pointer"
                        size={20}
                    />
                )}

                {/* error message  */}
                {error && (
                    <p className="text-red-500 mt-1 text-sm font-normal">
                        {errorMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ChangePasswordField;
