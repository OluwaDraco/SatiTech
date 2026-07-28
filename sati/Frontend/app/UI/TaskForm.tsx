"use client";
import React from "react";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { taskFormSchema } from "../api/zodSchema";
import { z } from "zod";
import { cn } from "@/lib/utils";

import { login, signup } from "../api/graphql/queries";
import { useRouter } from "next/navigation";
//UI components
import { Button } from "../../components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "../../components/ui/input";
import { title } from "process";
import { SheetClose, SheetFooter } from "../../components/ui/sheet";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

type TaskData = {
    title: string;
    type: "UI" | "UX" | "Bugs" | "Documentation" | "Issue";
    status: "In Progress" | "Done" | "Closed";
    priority: "High" | "Medium" | "Low";
    reviewer: string;
    due: Date;
};

type CreateMode = { mode: "create" };
type EditMode = { mode: "edit"; taskData: TaskData };
type TaskFormProps = CreateMode | EditMode;

const TaskForm = (props: TaskFormProps) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof taskFormSchema>>({
        resolver: zodResolver(taskFormSchema),
        defaultValues:
            props.mode === "edit"
                ? {
                      title: props.taskData.title,
                      type: props.taskData.type,
                      status: props.taskData.status,
                      priority: props.taskData.priority,
                      reviewer: props.taskData.reviewer,
                      due: props.taskData.due,
                  }
                : {
                      title: "",
                      type: "Bugs",
                      status: "In Progress",
                      priority: "High",
                      reviewer: "",
                      due: new Date(),
                  },
    });
    function onSubmit(data: z.infer<typeof taskFormSchema>) {
        console.log(JSON.stringify(data, null, 2));
    }

    // const onSubmit = async (values: z.infer<typeof signupSchema>) => {
    //     setIsLoading(true);
    //     setErrorMessage(null);

    //     try {
    //         console.log("Attempting login with:", values.email);
    //         console.log(values);

    //         const result = await signup(
    //             values.email,
    //             values.password,
    //             values.title,
    //             values.full_name,
    //         );

    //         console.log("signUp result:", result);

    //         if (result.success && result.redirect) {
    //             console.log(
    //                 "signup successful, redirecting to:",
    //                 // result.redirect
    //             );
    //             router.push(result.redirect);
    //         } else if (result.error) {
    //             console.log("signUp failed with error:", result.error);
    //             setErrorMessage(result.error);
    //         } else {
    //             console.log("Unexpected result format:", result);
    //             setErrorMessage(
    //                 "Something went wrong. Please try again in a moment.",
    //             );
    //         }
    //     } catch (error) {
    //         console.error("signup error caught:", error);
    //         setErrorMessage(
    //             "Something went wrong. Please try again in a moment.",
    //         );
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <div className="flex flex-col gap-3">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        id="title"
                                        placeholder="Enter task title"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Task Type</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger
                                            id="type"
                                            className="w-full"
                                        >
                                            <SelectValue placeholder="Select task type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="UI">UI</SelectItem>
                                        <SelectItem value="UX">UX</SelectItem>
                                        <SelectItem value="Bugs">
                                            Bugs
                                        </SelectItem>
                                        <SelectItem value="Documentation">
                                            Documentation
                                        </SelectItem>
                                        <SelectItem value="Issue">
                                            Issue
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="status">Status</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger
                                            id="status"
                                            className="w-full"
                                        >
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="In Progress">
                                            In Progress
                                        </SelectItem>
                                        <SelectItem value="Done">
                                            Done
                                        </SelectItem>
                                        <SelectItem value="Closed">
                                            Closed
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="priority">Priority</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger
                                        id="priority"
                                        className="w-full"
                                    >
                                        <SelectValue placeholder="Select priority" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="High">High</SelectItem>
                                    <SelectItem value="Medium">
                                        Medium
                                    </SelectItem>
                                    <SelectItem value="Low">Low</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="reviewer"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="reviewer">Reviewer</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger
                                        id="reviewer"
                                        className="w-full"
                                    >
                                        <SelectValue placeholder="Select reviewer" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Justin Pursati">
                                        Justin Pursati
                                    </SelectItem>
                                    <SelectItem value="Olushola Oludipe">
                                        Olushola Oludipe
                                    </SelectItem>
                                    <SelectItem value="Emily Whalen">
                                        Emily Whalen
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="due"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Due By</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full pl-3 text-left font-normal",
                                                !field.value &&
                                                    "text-muted-foreground",
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Select due date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                >
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date <
                                            new Date(
                                                new Date().setHours(0, 0, 0, 0),
                                            )
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SheetFooter className="mt-auto flex gap-2 sm:flex-col sm:space-x-0">
                    <Button className="w-full">Submit</Button>
                    <SheetClose asChild>
                        <Button variant="outline" className="w-full">
                            Done
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </form>
        </Form>
        //         </div>
        //     </SheetContent>
        // </Sheet>
    );
};

export default TaskForm;
