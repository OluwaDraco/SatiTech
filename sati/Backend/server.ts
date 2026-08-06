import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { schema } from "./schema/index.js";
import "dotenv/config";

const yoga = createYoga({
    graphqlEndpoint: "/",
    schema,
    cors: {
        origin: process.env.FRONTEND_URL || "*",
        credentials: true,
    },
    context: (req) => {
        return { req };
    },
});

const server = createServer(yoga);

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`\
🚀 Server ready at: http://127.0.0.1:${port}
  `);
});
