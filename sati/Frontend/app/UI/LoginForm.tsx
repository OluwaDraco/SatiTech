"use client";
import React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../api/zodSchema";
import { z } from "zod";
import { login } from "../api/graphql/queries";
import { useRouter } from "next/navigation";
//UI components
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof loginSchema>) => {
        setIsLoading(true);
        setErrorMessage(null);

        try {
            console.log("Attempting login with:", values.email);
            const result = await login(values.email, values.password);
            console.log("Login result:", result);

            if (result.success && result.redirect) {
                console.log(
                    "Login successful, redirecting to:",
                    result.redirect
                );
                router.push(result.redirect);
            } else if (result.error) {
                console.log("Login failed with error:", result.error);
                setErrorMessage(result.error);
            } else {
                console.log("Unexpected result format:", result);
                setErrorMessage(
                    "Something went wrong. Please try again in a moment."
                );
            }
        } catch (error) {
            console.error("Login error caught:", error);
            setErrorMessage(
                "Something went wrong. Please try again in a moment."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="email"
                                    {...field}
                                    className="focus:text-white"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="password"
                                    {...field}
                                    className="focus:text-white"
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />{" "}
                {errorMessage && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                        {errorMessage}
                    </div>
                )}
                <div className="relative m-6">
                    <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% opacity-75 blur"></div>
                    <div className=" relative flex gap-4 items-center flex-col sm:flex-row">
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? "Logging in..." : "Login"}
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
};

export default LoginForm;
