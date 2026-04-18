import { Client, cacheExchange, fetchExchange, errorExchange } from "urql";

// Default configuration - can be overridden per environment
const DEFAULT_API_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:4000";

export const createGraphQLClient = (url: string = DEFAULT_API_URL) => {
    return new Client({
        url,
        exchanges: [
            cacheExchange,
            errorExchange({
                onError(error) {
                    console.error(error);
                },
            }),
            fetchExchange,
        ],
    });
};

// Default client instance
export const client = createGraphQLClient();
