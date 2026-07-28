"use server";
import { gql, useQuery } from "urql";
import { pipe, subscribe } from "wonka";
import { client } from "./client";
import { createSession, deleteSession } from "@/lib/middleware/sessions";
import {
    LOGIN_MUTATION,
    SIGNUP_MUTATION,
    SignupResult,
} from "@sati/shared/graphql";
import { USER_BY_ID_QUERY } from "@sati/shared/graphql";
import { error } from "console";

type LoginResult = {
    success: boolean;
    user?: { id: string };
    error?: string;
    redirect?: string;
};

export const login = async (
    email: string,
    password: string,
): Promise<LoginResult> => {
    return new Promise((resolve) => {
        pipe(
            client.mutation(LOGIN_MUTATION, {
                email: email.trim().toLowerCase(),
                password: password,
            }),
            subscribe((result) => {
                // Check for any errors (authentication failures)
                if (result.error) {
                    // For any authentication error, show generic message
                    resolve({
                        success: false,
                        error: "Incorrect email or password",
                    });
                    return;
                }

                // Handle successful response
                const data = result.data?.login;

                if (!data?.token || !data?.user) {
                    resolve({
                        success: false,
                        error: "Incorrect email or password",
                    });
                    return;
                }

                const { token, user } = data;

                // Create session and resolve
                createSession(token)
                    .then(() => {
                        resolve({
                            success: true,
                            user,
                            redirect: "/dashboard",
                        });
                    })
                    .catch((err) => {
                        console.error("Session creation error:", err);
                        resolve({
                            success: false,
                            error: "Login successful but session creation failed. Please try again.",
                        });
                    });
            }),
        );
    });
};

export const signup = async (
    email: string,
    password: string,
    title: string,
    full_name: string,
): Promise<SignupResult> => {
    return new Promise((resolve) => {
        pipe(
            client.mutation(SIGNUP_MUTATION, {
                email: email.trim().toLowerCase(),
                password: password,
                full_name: full_name,
                title: title,
            }),
            subscribe((result) => {
                // Check for any errors (authentication failures)
                if (result.error) {
                    // For any authentication error, show generic message
                    //check if email already exist?
                    resolve({
                        success: false,
                        error: `Something went wrong${result.error}`,
                    });
                    return;
                }

                // Handle successful response
                const data = result.data?.signup;

                if (!data?.token || !data?.user || !data?.success) {
                    resolve({
                        success: false,
                        error: "something went wrong",
                    });
                    return;
                }

                const { token, user } = data;
                console.log("USER CREATED", user, token);

                createSession(token)
                    .then(() => {
                        resolve({
                            success: true,
                            user,
                            redirect: "/dashboard",
                        });
                    })
                    .catch((err) => {
                        console.error("Session creation error:", err);
                        resolve({
                            success: false,
                            error: "Login successful but session creation failed. Please try again.",
                        });
                    });
            }),
        );
    });
};

export const logOut = async () => {
    await deleteSession();
};

export const getUserById = async (id: string) => {
    return new Promise((resolve) => {
        pipe(
            client.query(USER_BY_ID_QUERY, { id }),
            subscribe((result) => {
                if (result.error) {
                    resolve({ success: false, error: result.error.message });
                    return;
                }

                const user = result.data?.userById;
                if (!user) {
                    resolve({ success: false, error: "User not found" });
                    return;
                }

                resolve({ success: true, user });
            }),
        );
    });
};
