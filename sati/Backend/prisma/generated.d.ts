/* eslint-disable */
import type {
    Prisma,
    Clients,
    Job,
    Task,
    sati_users,
    Users,
} from "../generated/prisma/index.js";
export default interface PrismaTypes {
    Clients: {
        Name: "Clients";
        Shape: Clients;
        Include: Prisma.ClientsInclude;
        Select: Prisma.ClientsSelect;
        OrderBy: Prisma.ClientsOrderByWithRelationInput;
        WhereUnique: Prisma.ClientsWhereUniqueInput;
        Where: Prisma.ClientsWhereInput;
        Create: {};
        Update: {};
        RelationName: "jobs";
        ListRelations: "jobs";
        Relations: {
            jobs: {
                Shape: Job[];
                Name: "Job";
                Nullable: false;
            };
        };
    };

    Jobs: {
        Name: "Jobs";
        Shape: Job;
        Include: Prisma.JobInclude;
        Select: Prisma.JobSelect;
        OrderBy: Prisma.JobOrderByWithRelationInput;
        WhereUnique: Prisma.JobWhereUniqueInput;
        Where: Prisma.JobWhereInput;
        Create: {};
        Update: {};
        RelationName: "clients" | "users";
        ListRelations: never;
        Relations: {
            clients: {
                Shape: Clients | null;
                Name: "Clients";
                Nullable: true;
            };
            users: {
                Shape: Users | null;
                Name: "Users";
                Nullable: true;
            };
        };
    };

    sati_users: {
        Name: "sati_users";
        Shape: sati_users;
        Include: never;
        Select: Prisma.sati_usersSelect;
        OrderBy: Prisma.sati_usersOrderByWithRelationInput;
        WhereUnique: Prisma.sati_usersWhereUniqueInput;
        Where: Prisma.sati_usersWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };

    Task: {
        Name: "Task";
        Shape: Task;
        Include: Prisma.TaskInclude;
        Select: Prisma.TaskSelect;
        OrderBy: Prisma.TaskOrderByWithRelationInput;
        WhereUnique: Prisma.TaskWhereUniqueInput;
        Where: Prisma.TaskWhereInput;
        Create: {};
        Update: {};
        RelationName: "users" | "jobs";
        ListRelations: "jobs" | "task";
        Relations: {
            users: {
                Shape: Users;
                Name: "Users";
                Nullable: false;
            };
            jobs: {
                Shape: Job[];
                Name: "Job";
                Nullable: false;
            };
        };
    };

    Users: {
        Name: "Users";
        Shape: Users;
        Include: Prisma.UsersInclude;
        Select: Prisma.UsersSelect;
        OrderBy: Prisma.UsersOrderByWithRelationInput;
        WhereUnique: Prisma.UsersWhereUniqueInput;
        Where: Prisma.UsersWhereInput;
        Create: {};
        Update: {};
        RelationName: "jobs" | "task";
        ListRelations: "jobs" | "task";
        Relations: {
            jobs: {
                Shape: Job[];
                Name: "Job";
                Nullable: false;
            };
            task: {
                Shape: Task[];
                Name: "Task";
                Nullable: false;
            };
        };
    };
}
