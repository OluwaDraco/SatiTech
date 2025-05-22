"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "../../../components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select";

import { SheetClose, SheetFooter } from "../../../components/ui/sheet";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const FormSchema = z.object({
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
});

type Item = {
    header: string;
    type: string;
    status: string;
    priority: string;
    reviewer: string;
    due: Date;
};

export function CalendarForm({ item }: { item: Item }) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(JSON.stringify(data, null, 2));
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <div className="flex flex-col gap-3">
                    <FormField
                        control={form.control}
                        name="task"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Task</FormLabel>
                                <FormControl>
                                    <Input id="task" />
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
                                <FormLabel>Type</FormLabel>
                                <Select onValueChange={field.onChange}>
                                    <FormControl>
                                        <SelectTrigger
                                            id="type"
                                            className="w-full"
                                        >
                                            <SelectValue placeholder="Select a which part you working on" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="frontend">
                                            FrontEnd
                                        </SelectItem>
                                        <SelectItem value="backend">
                                            BackEnd
                                        </SelectItem>
                                        <SelectItem value="ui">UI</SelectItem>
                                        <SelectItem value="bug">Bug</SelectItem>
                                        <SelectItem value="integration">
                                            Integration
                                        </SelectItem>
                                        <SelectItem value="configuration">
                                            Configuration
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
                                <Select onValueChange={field.onChange}>
                                    <FormControl>
                                        <SelectTrigger
                                            id="status"
                                            className="w-full"
                                        >
                                            {" "}
                                            <SelectValue placeholder="Status" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Done">
                                            Done
                                        </SelectItem>
                                        <SelectItem value="In Progress">
                                            In Progress
                                        </SelectItem>
                                        <SelectItem value="Not Started">
                                            Not Started
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    // color change as date gets closer Code green-low, yellow-medium,red-high
                    //changes
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="priority">Priority</FormLabel>
                            <Select onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger
                                        id="priority"
                                        className="w-full"
                                    >
                                        {" "}
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">
                                        Medium
                                    </SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    // color change as date gets closer Code green-low, yellow-medium,red-high
                    //changes
                    control={form.control}
                    name="reviewer"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="reviewer">Reviewer</FormLabel>
                            <Select onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger
                                        id="reviewer"
                                        className="w-full"
                                    >
                                        {" "}
                                        <SelectValue placeholder="Who will review your work?" />
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
                            <FormLabel>Due Date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !field.value &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
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
                                            date > new Date() ||
                                            date < new Date("1900-01-01")
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
}
