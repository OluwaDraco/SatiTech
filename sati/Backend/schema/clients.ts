import { builder } from "../utils/builder.js";

builder.queryType({
    description: "The query root type.",
});

builder.prismaObject("Clients", {
    fields: (t) => ({
        id: t.exposeID("id"),
        company_name: t.exposeString("company_name"),
        country: t.exposeString("country"),
        total_spent: t.field({
            type: "Float",
            nullable: true,
            resolve: (client) => client.total_spent?.toNumber(),
        }),
        feedback_score: t.field({
            type: "Float",
            nullable: true,
            resolve: (client) => client.feedback_score?.toNumber(),
        }),
        jobs: t.relation("jobs"),
    }),
});
