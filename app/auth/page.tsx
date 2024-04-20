"use client";

import React, { useState } from "react";
import axios from "axios";

const AuthPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "http://localhost:4000/auth/login",
                {
                    email,
                    password,
                }
            );

            // Handle the response
            console.log(response.data);
        } catch (error) {
            // Handle error
            console.error("Error sending post request:", error);
        }
    };
    return (
        <div className="h-[80vh] flex justify-center items-center">
            <div className="flex flex-col gap-3 w-[400px] bg-neutral-200 p-3 rounded-md">
                <input
                    type="text"
                    className="outline-none px-2 py-2 border-neutral-600"
                    placeholder="jhom"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    className="outline-none px-2 py-2 border-neutral-600"
                    placeholder="doe"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="text"
                    className="outline-none px-2 py-2 border-neutral-600"
                    placeholder=""
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    className="outline-none px-2 py-2 border-neutral-600"
                    placeholder=""
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-blue-500"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default AuthPage;
