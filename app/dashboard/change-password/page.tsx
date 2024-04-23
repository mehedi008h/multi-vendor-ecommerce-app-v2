"use client";

import { HorizontalLine } from "@/components/common";
import { ChangePasswordField } from "@/components/dashboard";
import React from "react";
import { Formik } from "formik";
import { ChangePasswordSchema } from "@/types/schema";

const ChangePasswordPage = () => {
    return (
        <div className="w-full h-full p-5 bg-neutral-50 rounded-md shadow-md">
            {/* heading  */}
            <h3 className="text-xl font-semibold text-primary">Password</h3>
            <h5 className="font-normal text-base text-neutral-500">
                Please enter your current password to change your password.
            </h5>

            {/* form  */}
            <Formik
                initialValues={{
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                }}
                validationSchema={ChangePasswordSchema}
                onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({
                    errors,
                    touched,
                    values,
                    handleSubmit,
                    handleBlur,
                    handleChange,
                    resetForm,
                }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        {/* current password  */}
                        <ChangePasswordField
                            label="Current Password"
                            id="currentPassword"
                            disabled={false}
                            error={
                                errors.currentPassword &&
                                touched.currentPassword
                                    ? true
                                    : false
                            }
                            required
                            value={values.currentPassword}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            errorMessage={
                                errors.currentPassword &&
                                touched.currentPassword
                                    ? errors.currentPassword
                                    : null
                            }
                        />
                        <HorizontalLine className="bg-neutral-200" />

                        {/* new password  */}
                        <ChangePasswordField
                            label="New Password"
                            id="newPassword"
                            disabled={false}
                            error={
                                errors.newPassword && touched.newPassword
                                    ? true
                                    : false
                            }
                            required
                            value={values.newPassword}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            errorMessage={
                                errors.newPassword && touched.newPassword
                                    ? errors.newPassword
                                    : null
                            }
                        />
                        <HorizontalLine className="bg-neutral-200" />

                        {/* new password  */}
                        <ChangePasswordField
                            label="Confirm Password"
                            id="confirmPassword"
                            disabled={false}
                            error={
                                errors.confirmPassword &&
                                touched.confirmPassword
                                    ? true
                                    : false
                            }
                            required
                            value={values.confirmPassword}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            errorMessage={
                                errors.confirmPassword &&
                                touched.confirmPassword
                                    ? errors.confirmPassword
                                    : null
                            }
                        />

                        {/* button  */}
                        <div className="w-full flex justify-end gap-5 mt-10">
                            <button
                                onClick={() => resetForm()}
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
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default ChangePasswordPage;
