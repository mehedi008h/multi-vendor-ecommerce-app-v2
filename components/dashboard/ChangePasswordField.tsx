"use client";

import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

interface Props {
    label: string;
    id: string;
    name: string;
}

const ChangePasswordField = ({ label, id, name }: Props) => {
    const [togglePassword, setTooglePassword] = useState<boolean>(false);

    // toggle password view
    const handleToogle = () => {
        setTooglePassword(!togglePassword);
    };
    return (
        <div className="my-8 grid grid-cols-12 items-center">
            <div className="col-span-4">
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            </div>
            <div className="col-span-4 relative">
                <input
                    type={togglePassword ? "text" : "password"}
                    name={name}
                    id={id}
                    autoComplete="current-password"
                    className="px-2 focus:ring-indigo-500 focus:border-indigo-500 w-full h-10 sm:text-sm border-neutral-400 border-[1px] rounded-md outline-none"
                />

                {/* toogle icon  */}
                {togglePassword ? (
                    <LuEyeOff
                        onClick={handleToogle}
                        className="absolute right-3 top-[10px] text-neutral-500 cursor-pointer"
                        size={20}
                    />
                ) : (
                    <LuEye
                        onClick={handleToogle}
                        className="absolute right-3 top-[10px] text-neutral-500 cursor-pointer"
                        size={20}
                    />
                )}
            </div>
        </div>
    );
};

export default ChangePasswordField;
