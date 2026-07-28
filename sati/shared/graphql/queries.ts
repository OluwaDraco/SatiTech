import { gql } from "urql";

export const USER_BY_EMAIL_QUERY = gql`
    query userByEmail($email: String!) {
        userByEmail(email: $email) {
            id
            full_name
            title
            rate
            location
            skills
            overview
            admin
            email
            profile_url
            reviews
        }
    }
`;

export const USER_BY_ID_QUERY = gql`
    query userById($id: String!) {
        userById(id: $id) {
            id
            full_name
            title
            rate
            location
            skills
            overview
            admin
            email
            profile_url
            reviews
        }
    }
`;
