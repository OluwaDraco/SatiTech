import { builder } from "../utils/builder.js";
import { prisma } from "../utils/db.js";
builder.prismaObject("Task", {
    fields: (t) => ({
        id: t.exposeID("id"),
        title: t.exposeString("title"),
        priority: t.exposeString("priority"),
        status: t.exposeString("status"),
        due: t.expose("due", {
            type: "DateTime",
            nullable: true,
        }),
        reviewer: t.exposeString("reviewer"),
        user_id: t.exposeString("user_id"),
        job_id: t.exposeString("job_id"),
        user: t.relation("users"),
        job: t.relation("job"),
    }),
});

builder.queryField("taskByID", (t) =>
    t.prismaField({
        type: "Task",
        args: {
            id: t.arg.string({ required: true }),
        },
        resolve: (query, _parent, args, ctx) => {
            return prisma.task.findUniqueOrThrow({
                ...query,
                where: { id: args.id },
            });
        },
    }),
);

builder.queryField("allTaskByUserID", (t) =>
    t.prismaField({
        type: ["Task"],
        nullable: true,
        args: {
            user_id: t.arg.string({ required: true }),
        },
        resolve: (query, _parent, args, ctx) => {
            return prisma.task.findMany({ where: { user_id: args.user_id } });
        },
    }),
);
