import SchemaBuilder from "@pothos/core";
import { prisma } from "./db";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "../prisma/generated.d.ts";
import { Users } from "../generated/prisma";

import { DateTimeResolver } from "graphql-scalars";

import { Prisma } from "@prisma/client";
interface AuthPayload {
    token: string;
    user: Users;
}

interface loginPayload {
    user: Users;
}
export const builder = new SchemaBuilder<{
    // Context: { user: { isAdmin: boolean } };

    PrismaTypes: PrismaTypes;
    Objects: {
        AuthPayload: AuthPayload;
        Users: Users;
        loginPayload: loginPayload;
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
});
builder.queryType({});
builder.mutationType({});

builder.addScalarType("DateTime", DateTimeResolver, {});
