"use server";
import { gql, useQuery } from "urql";
import { pipe, subscribe } from "wonka";
import { client } from "./client";
import { createSession, deleteSession } from "@/lib/middleware/sessions";

const loginMutation = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
            }
        }
    }
`;

type LoginResult = {
    success: boolean;
    user?: { id: string };
    error?: string;
    redirect?: string;
};

export const login = async (email: string, password: string): Promise<LoginResult> => {
    return new Promise((resolve) => {
        pipe(
            client.mutation(loginMutation, {
                email: email.trim().toLowerCase(),
                password: password,
            }),
            subscribe((result) => {
                // Check for any errors (authentication failures)
                if (result.error) {
                    // For any authentication error, show generic message
                    resolve({ success: false, error: "Incorrect email or password" });
                    return;
                }

                // Handle successful response
                const data = result.data?.login;

                if (!data?.token || !data?.user) {
                    resolve({ success: false, error: "Incorrect email or password" });
                    return;
                }

                const { token, user } = data;
                
                // Create session and resolve
                createSession(token).then(() => {
                    resolve({ success: true, user, redirect: "/dashboard" });
                }).catch((err) => {
                    console.error("Session creation error:", err);
                    resolve({ success: false, error: "Login successful but session creation failed. Please try again." });
                });
            })
        );
    });
};

export const logOut = async () => {
    await deleteSession();
};
