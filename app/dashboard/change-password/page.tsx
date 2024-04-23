"use client";

import { HorizontalLine } from "@/components/common";
import { ChangePasswordField } from "@/components/dashboard";
import React from "react";
import * as yup from "yup";
import { Formik } from "formik";

// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// schema for validation
const ChangePasswordSchema = yup
    .object({
        currentPassword: yup
            .string()
            .min(
                8,
                "Current Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number!"
            )
            .matches(passwordRules, {
                message: "Please create a stronger password",
            })
            .required("Current Password is required!"),
        newPassword: yup
            .string()
            .min(
                8,
                "New Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number!"
            )
            .matches(passwordRules, {
                message: "Please create a stronger password",
            })
            .required("New password is required!"),
        confirmPassword: yup
            .string()
            .min(
                8,
                "Confirm Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number!"
            )
            .matches(passwordRules, {
                message: "Please create a stronger password",
            })
            .oneOf(
                [yup.ref("newPassword")],
                "Confirm Passwords must match with New Password!"
            )
            .required("Confirm Password is required!"),
    })
    .required();

const ChangePasswordPage = () => {
    return (
        <div className="w-full h-full p-5 bg-neutral-50 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-primary">Password</h3>
            <h5 className="font-normal text-base text-neutral-500">
                Please enter your current password to change your password.
            </h5>
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
                }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        {/* current password  */}
                        <ChangePasswordField
                            label="Current Password"
                            id="currentPassword"
                            disabled={false}
                            error={errors.currentPassword}
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
                            error={errors.newPassword}
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
                            error={errors.confirmPassword}
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
