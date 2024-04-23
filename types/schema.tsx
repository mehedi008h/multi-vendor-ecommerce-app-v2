import * as yup from "yup";

// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// schema for validation
export const ChangePasswordSchema = yup
    .object({
        currentPassword: yup
            .string()
            .required("Current Password is required!")
            .min(
                8,
                "Current Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number!"
            )
            .matches(passwordRules, {
                message: "Please create a stronger password",
            }),

        newPassword: yup
            .string()
            .required("New password is required!")
            .min(
                8,
                "New Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number!"
            )
            .matches(passwordRules, {
                message: "Please create a stronger password",
            }),

        confirmPassword: yup
            .string()
            .required("Confirm Password is required!")
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
            ),
    })
    .required();
