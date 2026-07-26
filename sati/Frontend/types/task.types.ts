import { z } from "zod";

export const taskSchema = z.object({
    id: z.number(),
    header: z.string(),
    type: z.enum(["UI", "UX", "Bugs", "Documentation", "Issue"]),
    status: z.enum(["In Progress", "Done", "Closed"]),
    priority: z.enum(["High", "Medium", "Low"]),
    reviewer: z.string(),
    due: z.date(),
});

export type Task = z.infer<typeof taskSchema>;

// Raw data type (before Zod transformation)
export type RawTask = {
    id: number;
    header: string;
    type: "UI" | "UX" | "Bugs" | "Documentation" | "Issue";
    status: "In Progress" | "Done" | "Closed";
    priority: "High" | "Medium" | "Low";
    reviewer: string;
    due: string;
};
