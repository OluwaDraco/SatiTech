import { Client, cacheExchange, fetchExchange, errorExchange } from "urql";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const client = new Client({
    url: API_URL,
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
