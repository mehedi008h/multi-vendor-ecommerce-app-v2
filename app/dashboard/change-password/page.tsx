import { HorizontalLine } from "@/components/common";
import React from "react";

const ChangePasswordPage = () => {
    return (
        <div className="w-full h-full p-5 bg-neutral-50 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-primary">Password</h3>
            <h5 className="font-normal text-base text-neutral-500">
                Please enter your current password to change your password.
            </h5>

            {/* current password  */}
            <div className="my-8 grid grid-cols-12 items-center">
                <div className="col-span-4">
                    <label
                        htmlFor="currentPassword"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Current Password
                    </label>
                </div>
                <div className="col-span-4">
                    <input
                        type="password"
                        name="currentPassword"
                        id="currentPassword"
                        autoComplete="current-password"
                        className="focus:ring-indigo-500 focus:border-indigo-500 w-full h-10 sm:text-sm border-neutral-4s00 border-[1px] rounded-md outline-none"
                    />
                </div>
            </div>
            <HorizontalLine className="bg-neutral-200" />

            {/* new password  */}
            <div className="my-8 grid grid-cols-12 items-center">
                <div className="col-span-4">
                    <label
                        htmlFor="newPassword"
                        className="block text-sm font-medium text-gray-700"
                    >
                        New Password
                    </label>
                </div>
                <div className="col-span-4">
                    <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        autoComplete="current-password"
                        className="focus:ring-indigo-500 focus:border-indigo-500 w-full h-10 sm:text-sm border-neutral-4s00 border-[1px] rounded-md outline-none"
                    />
                </div>
            </div>
            <HorizontalLine className="bg-neutral-200" />

            {/* new password  */}
            <div className="my-8 grid grid-cols-12 items-center">
                <div className="col-span-4">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Confirm Password
                    </label>
                </div>
                <div className="col-span-4">
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        autoComplete="current-password"
                        className="focus:ring-indigo-500 focus:border-indigo-500 w-full h-10 sm:text-sm border-neutral-4s00 border-[1px] rounded-md outline-none"
                    />
                </div>
            </div>

            {/* button  */}
            <div className="w-full flex justify-end gap-5 mt-10">
                <button
                    type="reset"
                    className="w-fit flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-neutral-700 bg-transparent border-neutral-500 focus:outline-none"
                >
                    Reset
                </button>
                <button
                    type="submit"
                    className="w-fit flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                >
                    Change Password
                </button>
            </div>
        </div>
    );
};

export default ChangePasswordPage;
