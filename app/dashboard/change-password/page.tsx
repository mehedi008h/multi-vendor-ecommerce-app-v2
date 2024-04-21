import { HorizontalLine } from "@/components/common";
import { ChangePasswordField } from "@/components/dashboard";
import React from "react";
import * as yup from "yup";

const ChangePasswordPage = () => {
    return (
        <div className="w-full h-full p-5 bg-neutral-50 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-primary">Password</h3>
            <h5 className="font-normal text-base text-neutral-500">
                Please enter your current password to change your password.
            </h5>

            {/* current password  */}
            <ChangePasswordField
                label="Current Password"
                id="currentPassword"
                name="currentPassword"
            />
            <HorizontalLine className="bg-neutral-200" />

            {/* new password  */}
            <ChangePasswordField
                label="New Password"
                id="newPassword"
                name="newPassword"
            />
            <HorizontalLine className="bg-neutral-200" />

            {/* new password  */}
            <ChangePasswordField
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
            />

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
