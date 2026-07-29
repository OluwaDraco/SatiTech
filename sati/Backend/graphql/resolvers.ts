import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            const allUsers = await prisma.users.findMany();
            return allUsers ?? []; // Fallback to empty array just in case
        },
        userByEmail: async (parent, args, context) => {
            const { email } = args;
            const user = await prisma.users.findUnique({ where: { email } });
            return user ?? null; // Fallback to null if not found
        },
    },
    Mutations: {
        //login

        // create a new user
        createUser: async (parent, args, context) => {
            const {
                full_name,
                title,
                rate,
                location,
                skills,
                overview,
                admin,
                email,
                profile_url,
                reviews,
                password,
            } = args;
            const newUser = await prisma.users.create({
                data: {
                    title,
                    rate,
                    location,
                    skills,
                    overview,
                    admin,
                    email,
                    profile_url,
                    reviews,
                    password,
                    full_name,
                },
            });
            return newUser;
        },

        // create a new client
        createClient: async (parent, args, context) => {
            const { id, company_name, country, total_spent, feedback_score } =
                args;

            const newClient = await prisma.clients.create({
                data: {
                    id,
                    company_name,
                    country,
                    total_spent,
                    feedback_score,
                },
            });
            return newClient;
        },
    },
};
