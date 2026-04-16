import { GraphQLClient, gql } from "graphql-request";
import fetch from "node-fetch";

globalThis.fetch = fetch as any;

const client = new GraphQLClient("http://localhost:4000");

// Helper to create a test user before running tests
const createTestUser = async () => {
    const createUserMutation = gql`
        mutation createUser(
            $email: String!
            $password: String!
            $full_name: String!
            $title: String!
        ) {
            createUser(
                email: $email
                password: $password
                full_name: $full_name
                title: $title
            ) {
                id
                email
                full_name
            }
        }
    `;

    try {
        await client.request(createUserMutation, {
            email: "john@example.com",
            password: "hashed_pw_1",
            full_name: "John Doe",
            title: "Test Developer",
        });
        console.log("✅ Test user created");
    } catch (error: any) {
        // User might already exist, ignore error
        console.log("⚠️ Test user creation failed:", error.message);
    }
};

// Run before all tests
beforeAll(async () => {});

type LoginResponse = {
    login: {
        token: string;
        user: {
            id: string;
            email: string;
            full_name: string;
        };
    };
};

type UserByEmailResponse = {
    userByEmail: {
        id: string;
        full_name: string;
    };
};

const query = gql`
    query ($email: String!) {
        userByEmail(email: $email) {
            id
            full_name
            email
        }
    }
`;

const loginMutation = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
                email
            }
        }
    }
`;

test("should return a user", async () => {
    const variables = {
        email: "john@example.com",
    };

    const data = await client.request<UserByEmailResponse>(query, variables);
    console.log(data);
    expect(data.userByEmail).toBeDefined();
    expect(data.userByEmail.id).toBeDefined();
});

test("should login the user", async () => {
    const variables = {
        email: "john@example.com",
        password: "hashed_pw_1",
    };

    const res = await client.request<LoginResponse>(loginMutation, variables);

    console.log("Login response:", res);
    console.log("Token:", res.login.token);

    expect(res.login.token).toBeDefined();
    expect(res.login.user.email).toBe(variables.email);
});
