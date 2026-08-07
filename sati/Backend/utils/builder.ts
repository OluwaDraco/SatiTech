import SchemaBuilder from "@pothos/core";
import { prisma } from "./db.js";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { Users, Task } from "../generated/prisma/index.js";

import { DateTimeResolver } from "graphql-scalars";

import { Prisma } from "@prisma/client";
interface AuthPayload {
    token: string;
    user: Users;
}

interface loginPayload {
    user: Users;
}

interface SignupPayload {
    success: boolean;
    token: string;
    user: Users;
}

export const builder = new SchemaBuilder<{
    // Context: { user: { isAdmin: boolean } };

    PrismaTypes: PrismaTypes;
    Objects: {
        AuthPayload: AuthPayload;
        Users: Users;
        Task: Task;
        loginPayload: loginPayload;
        SignupPayload: SignupPayload;
    };
    Scalars: {
        DateTime: {
            Input: Date;
            Output: Date;
        };
    };
}>({
    plugins: [PrismaPlugin],
    prisma: {
        client: prisma,
    },
    notStrict:
        "Pothos may not work correctly when strict mode is not enabled in tsconfig.json",
});
builder.queryType({});
builder.mutationType({});

builder.addScalarType("DateTime", DateTimeResolver, {});
