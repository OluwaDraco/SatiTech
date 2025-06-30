import { Client, cacheExchange, fetchExchange, errorExchange } from "urql";

export const client = new Client({
    url: "http://localhost:4000",
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
