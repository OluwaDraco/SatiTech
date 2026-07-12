import { builder } from "../utils/builder";
import { prisma } from "../utils/db";
builder.prismaObject("Jobs", {
    fields: (t) => ({
        id: t.exposeID("id"),
        title: t.exposeString("title", { nullable: true }),
        priority: t.exposeString("description", { nullable: true }),
        status: t.exposeStringList("skills"),
        job_type: t.exposeString("job_type", { nullable: true }),
        created_at: t.expose("created_at", {
            type: "DateTime",
            nullable: true,
        }),
        rate: t.field({
            type: "Float",
            nullable: true,
            resolve: (job) => job.rate?.toNumber(),
        }),
        user_id: t.exposeString("user_id", { nullable: true }),
        client_id: t.exposeString("client_id", { nullable: true }),
        users: t.relation("users", { nullable: true }),
        clients: t.relation("clients", { nullable: true }),
    }),
});