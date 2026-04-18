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
