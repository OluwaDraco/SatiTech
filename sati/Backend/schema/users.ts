import { builder } from "../utils/builder";
import { prisma } from "../utils/db";

builder.queryType({
    description: "The query root type.",
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
        password: t.exposeString("password"),
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
    })
);
