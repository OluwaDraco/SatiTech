import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { schema } from "./schema/index";
import "dotenv/config";

// export const con = new Pool({
//     host: "localhost",
//     user: "shola",
//     port: 5432,
//     // change to env file
//     password: "shola1",
//     database: "upwork_data",
// });

// con.connect().then(() => console.log("connected"));
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
// });
// const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
// });

// console.log(`🚀  Server ready at: ${url}`);

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

server.listen(4000, () => {
    console.log(`\
🚀 Server ready at: http://127.0.0.1:4000
⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
  `);
});
