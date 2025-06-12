"use client";
import { gql, useQuery } from "urql";
import { pipe, subscribe } from "wonka";
import { client } from "./client";

const GetUserByEmailQuery = gql`
    query ($email: String!) {
        userByEmail(email: $email) {
            id
            full_name
            email
            password
        }
    }
`;

export const UserByEmail = async (email: string, password: string) => {
    const result = await new Promise<any>((resolve, reject) => {
        pipe(
            client.query(GetUserByEmailQuery, {
                email: email,
            }),
            subscribe((result) => {
                if (result.error) reject(result.error);
                else resolve(result);
            })
        );
    });

    const user = result.data?.userByEmail;

    if (!user) {
        return {
            userFound: false,
            passwordCorrect: false,
            user: null,
        };
    }

    const passwordCorrect = user.password === password;

    return {
        userFound: true,
        passwordCorrect,
        user: passwordCorrect ? user : null,
    };

    //user found password wrong
};
