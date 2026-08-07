import { builder } from "../utils/builder.js";
import { prisma } from "../utils/db.js";
import { Job } from "../generated/prisma/index.js";

builder.queryType({
    description: "The query root type.",
});

builder.prismaObject("Job", {
    fields: (t) => ({
        id: t.exposeID("id"),
        title: t.exposeString("title", { nullable: true }),
        description: t.exposeString("description", { nullable: true }),
        skills: t.exposeStringList("skills"),
        job_type: t.exposeString("job_type", { nullable: true }),
        budget: t.field({
            type: "Float",
            nullable: true,
            resolve: (job: Job) => job.budget?.toNumber(),
        }),
        duration: t.exposeString("duration", { nullable: true }),
        workload: t.exposeString("workload", { nullable: true }),
        created_at: t.expose("created_at", {
            type: "DateTime",
            nullable: true,
        }),
        rate: t.field({
            type: "Float",
            nullable: true,
            resolve: (job: Job) => job.rate?.toNumber(),
        }),
        user_id: t.exposeString("user_id", { nullable: true }),
        client_id: t.exposeString("client_id", { nullable: true }),
        user: t.relation("users", { nullable: true }),
        clients: t.relation("clients", { nullable: true }),
    }),
});

builder.queryField("jobByID", (t) =>
    t.prismaField({
        type: "Job",
        nullable: true,
        args: {
            id: t.arg.string({ required: true }),
        },
        resolve: (query, _parent, args, ctx) => {
            return prisma.job.findUnique({
                ...query,
                where: { id: args.id },
            });
        },
    }),
);
