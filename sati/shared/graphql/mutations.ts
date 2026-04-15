import { gql } from "urql";

export const LOGIN_MUTATION = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
            }
        }
    }
`;

export const SIGNUP_MUTATION = gql`
    mutation signup($email: String!, $password: String!) {
        signup(email: $email, password: $password) {
            success
            user {
                id
            }
        }
    }
`;

export const CREATE_USER_MUTATION = gql`
    mutation createUser(
        $full_name: String!
        $title: String!
        $rate: Float
        $location: String
        $skills: [String!]
        $overview: String
        $admin: Boolean
        $email: String!
        $profile_url: String
        $reviews: [String!]
        $password: String!
    ) {
        createUser(
            full_name: $full_name
            title: $title
            rate: $rate
            location: $location
            skills: $skills
            overview: $overview
            admin: $admin
            email: $email
            profile_url: $profile_url
            reviews: $reviews
            password: $password
        ) {
            id
            email
            full_name
        }
    }
`;
