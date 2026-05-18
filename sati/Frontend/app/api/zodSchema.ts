import { title } from "process";
import { z } from "zod";
//delete later

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Please enter your email address")
        .email("Please enter a valid email address"),
    password: z.string().min(1, "Please enter your password"),
});

export const signupSchema = z.object({
    email: z
        .string()
        .min(1, "Please enter your email address")
        .email("Please enter a valid email address"),
    password: z.string().min(1, "Please enter your password"),
    title: z.string(),
    full_name: z.string().min(1, "Please enter your name."),
});
export const userSchema = z.object({
    full_name: z.string(),
    email: z.string(),
    password: z.string(),
    admin: z.boolean(),
    title: z.string(),
    skills: z.string().array().optional(),
    rate: z.number(),
    location: z.string(),
    profile_url: z.string(),
    overview: z.string(),
    reviews: z.string().array().optional(),
});

export const Contracts = z.object({
    id: z.string(),
    reference: z.string(),
    active: z.boolean(),
    job_title: z.string(),
    rate: z.object({
        amount: z.number(),
        currency: z.string(),
    }),
    start_date: z.date(),
    end_date: z.date().optional(),
    buyer: z.object({
        id: z.string(),
        company_name: z.string(),
    }),
    user: userSchema,
});
