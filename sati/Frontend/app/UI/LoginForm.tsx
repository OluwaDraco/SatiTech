"use client";
import React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../api/zodSchema";
import { z } from "zod";
import { UserByEmail } from "../../api/graphql/queries";
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
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof loginSchema>) => {
        console.log("click");
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const result = await UserByEmail(values.email, values.password);
        console.log(result);
        if (!result || !result.userFound) {
            setErrorMessage("Invalid email or password.");
            return;
        }

        setErrorMessage(null);
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
                            {errorMessage && (
                                <FormMessage>{errorMessage}</FormMessage>
                            )}
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

                            {errorMessage && (
                                <FormMessage>{errorMessage}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />{" "}
                <div className="relative m-6">
                    <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% opacity-75 blur"></div>
                    <div className=" relative flex gap-4 items-center flex-col sm:flex-row">
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
};

export default LoginForm;
