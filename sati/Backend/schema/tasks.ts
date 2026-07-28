import { builder } from "../utils/builder";
import { prisma } from "../utils/db";
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
        users: t.relation("users"),
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

// Mutations
builder.mutationField("createTask", (t) =>
    t.prismaField({
        type: "Task",
        args: {
            title: t.arg.string({ required: true }),
            priority: t.arg.string({ required: true }),
            status: t.arg.string({ required: true }),
            due: t.arg({ type: "DateTime", required: false }),
            reviewer: t.arg.string({ required: true }),
            user_id: t.arg.string({ required: true }),
            job_id: t.arg.string({ required: true }),
        },
        resolve: (query, _parent, args, ctx) => {
            return prisma.task.create({
                ...query,
                data: {
                    id: crypto.randomUUID(),
                    title: args.title,
                    priority: args.priority,
                    status: args.status,
                    due: args.due,
                    reviewer: args.reviewer,
                    user_id: args.user_id,
                    job_id: args.job_id,
                },
            });
        },
    }),
);

builder.mutationField("updateTask", (t) =>
    t.prismaField({
        type: "Task",
        args: {
            id: t.arg.string({ required: true }),
            title: t.arg.string({ required: false }),
            priority: t.arg.string({ required: false }),
            status: t.arg.string({ required: false }),
            due: t.arg({ type: "DateTime", required: false }),
            reviewer: t.arg.string({ required: false }),
        },
        resolve: (query, _parent, args, ctx) => {
            const { id, ...rest } = args;
            const data: Record<string, any> = {};

            if (rest.title !== undefined) data.title = rest.title;
            if (rest.priority !== undefined) data.priority = rest.priority;
            if (rest.status !== undefined) data.status = rest.status;
            if (rest.due !== undefined) data.due = rest.due;
            if (rest.reviewer !== undefined) data.reviewer = rest.reviewer;

            return prisma.task.update({
                ...query,
                where: { id },
                data,
            });
        },
    }),
);

builder.mutationField("deleteTask", (t) =>
    t.prismaField({
        type: "Task",
        args: {
            id: t.arg.string({ required: true }),
        },
        resolve: (query, _parent, args, ctx) => {
            return prisma.task.delete({
                ...query,
                where: { id: args.id },
            });
        },
    }),
);
