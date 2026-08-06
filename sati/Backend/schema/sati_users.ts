import { builder } from "../utils/builder.js";
import { prisma } from "../utils/db.js";

builder.prismaObject("sati_users", {
    fields: (t) => ({
        id: t.exposeID("id"),
        email: t.exposeString("email", { nullable: true }),
        password: t.exposeString("password", { nullable: true }),
    }),
});

builder.queryField("user", (t) =>
    t.prismaField({
        type: "sati_users",
        nullable: true,
        args: {
            id: t.arg.id({ required: true }),
        },
        resolve: (query, _root, args, ctx) => {
            return prisma.sati_users.findUnique({
                ...query,
                where: { id: args.id },
            });
        },
    }),
);
