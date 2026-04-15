import assert from "assert";
import { GraphQLClient, gql } from "graphql-request";
import test from "node:test";
import fetch from "node-fetch";

globalThis.fetch = fetch;

const client = new GraphQLClient("http://localhost:4000");

const query = gql`
    query ($email: String!) {
        userByEmail(email: $email) {
            id
            full_name
        }
    }
`;

const loginMutation = `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
                email
                full_name
            }
        }
    }
`;

test("should return a user", async () => {
    const variables = {
        email: "john@example.com",
    };
    try {
        const data = await client.request(query, variables);
        assert(data.userByEmail, "data should be defined");
        assert(data.userByEmail.id, "should return the user id ");

        console.log("test passed");
        //
    } catch (err) {
        console.error("test failed", err);
        throw err;
    }
});

test("should login the user", async () => {
    const variables = {
        email: "john@example.com",
        password: "hashed_pw_1",
    };

    try {
        const res = await client.request(loginMutation, variables);
        assert(res.login.token, "Token should be returned");
        assert.strictEqual(res.login.user.email, variables.email); // assert.strictEqual(data.login.email, variables.email);
        // assert.ok(data.login.id, "user should have id");

        console.log("login mutation test passed", res);
    } catch (err) {
        console.error("❌ Login failed:", err.response?.errors || err);
        throw err;
    }
});
