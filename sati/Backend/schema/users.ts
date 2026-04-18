import { builder } from "../utils/builder";
import type PrismaTypes from "../prisma/generated.d.ts";

import { prisma } from "../utils/db";
import { comparePassword, testAuth } from "../utils/bcrypt";
import { generateToken, verifyToken } from "../utils/jwt";
import { hashPassword } from "../utils/bcrypt";
import { Prisma, Users } from "../generated/prisma";

interface AuthPayload {
    token: string;
    user: Users;
}

builder.queryType({
    description: "The query root type.",
});
builder.objectType("AuthPayload", {
    fields: (t) => ({
        token: t.exposeString("token"),
        user: t.field({
            type: "Users",
            resolve: (auth) => auth.user,
        }),
    }),
});

builder.objectType("loginPayload", {
    fields: (t) => ({
        user: t.field({
            type: "Users",
            resolve: (login) => login.user,
        }),
    }),
});

builder.prismaObject("Users", {
    fields: (t) => ({
        id: t.exposeID("id"),
        full_name: t.exposeString("full_name"),
        title: t.exposeString("title"),
        rate: t.field({
            type: "Float",
            nullable: true,
            resolve: (users) => users.rate?.toNumber(),
        }),
        overview: t.exposeString("overview"),
        email: t.exposeString("email"),
        admin: t.exposeBoolean("admin"),
        profile_url: t.exposeString("profile_url"),
        reviews: t.exposeStringList("reviews"),
        skills: t.exposeStringList("skills"),
        jobs: t.relation("jobs"),
    }),
});

export const UserUniqueInput = builder.inputType("UserUniqueInput", {
    fields: (t) => ({
        email: t.string(),
    }),
});

builder.queryField("userByEmail", (t) =>
    t.prismaField({
        type: "Users",
        nullable: true,
        args: {
            email: t.arg.string({ required: true }),
        },
        resolve: (query, _parent, args, ctx) => {
            return prisma.users.findUnique({
                ...query,
                where: { email: args.email },
            });
        },
    }),
);

builder.mutationField("login", (t) =>
    t.field({
        type: "AuthPayload",
        args: {
            email: t.arg.string({ required: true }),
            password: t.arg.string({ required: true }),
        },
        resolve: async (_parent, { email, password }, ctx) => {
            const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

            const user = await prisma.users.findUnique({
                where: { email },
            });
            if (!user) throw new Error("Incorrect email or password");

            // const passwordMatch = comparePassword(password, user.password!);
            const passwordMatch = testAuth(password, user.password);
            if (!passwordMatch) throw new Error("Incorrect email or password");
            // create JWT

            const token = await generateToken({
                id: user.id,
                expiresAt: expiresAt,
            });
            return {
                token,
                user,
            };
        },
    }),
);
builder.mutationField("signup", (t) =>
    t.field({
        type: "AuthPayload",
        args: {
            email: t.arg.string({ required: true }),
            password: t.arg.string({ required: true }),
        },
        resolve: async (_parent, { email, password }, ctx) => {
            const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

            const user = await prisma.users.findUnique({
                where: { email },
            });
            if (!user) throw new Error("Incorrect email or password");

            // const passwordMatch = comparePassword(password, user.password!);
            const passwordMatch = testAuth(password, user.password);
            if (!passwordMatch) throw new Error("Incorrect email or password");
            // create JWT

            const token = await generateToken({
                id: user.id,
                expiresAt: expiresAt,
            });
            return {
                token,
                user,
            };
        },
    }),
);

builder.mutationField("createUser", (t) =>
    t.prismaField({
        type: "Users",
        args: {
            full_name: t.arg.string({ required: true }),
            title: t.arg.string({ required: true }),
            rate: t.arg.float(), // or Decimal if using Decimal scalar
            location: t.arg.string(),
            skills: t.arg.stringList(),
            overview: t.arg.string(),
            admin: t.arg.boolean(),
            email: t.arg.string({ required: true }),
            profile_url: t.arg.string(),
            reviews: t.arg.stringList(),
            password: t.arg.string({ required: true }),
        },
        resolve: async (query, _parent, args, ctx) => {
            const hashedPassword = await hashPassword(args.password);
            const newUser = await prisma.users.create({
                ...query,
                data: {
                    email: args.email,
                    password: hashedPassword,
                    full_name: args.full_name ?? null,
                    title: args.title ?? null,
                    rate: args.rate ?? null,
                    location: args.location ?? null,
                    skills: args.skills ?? [],
                    overview: args.overview ?? null,
                    admin: args.admin ?? false,
                    profile_url: args.profile_url ?? null,
                    reviews: args.reviews ?? [],
                },
            });
            return newUser;
        },
    }),
);
