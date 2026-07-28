"use client";

import * as React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "../../../components/ui/sheet";
import { Separator } from "../../../components/ui/separator";
import { useIsMobile } from "../../../hooks/use-mobile";
import TaskForm from "../TaskForm";
import { Task } from "../../../types";

interface TableCellViewerProps {
    item: Task;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function TableCellViewer({
    item,
    open,
    onOpenChange,
}: TableCellViewerProps) {
    console.log("items");
    console.log(item);
    const isMobile = useIsMobile();

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="right"
                className="flex w-[500px] max-w-[40vw] flex-col sm:w-[1000px]"
            >
                <SheetHeader className="gap-1">
                    <SheetTitle>{item.header}</SheetTitle>
                    <SheetDescription>
                        Before marking as done make sure its been reviewed
                    </SheetDescription>
                </SheetHeader>
                <div className="flex flex-1 flex-col gap-4 overflow-y-auto py-4 text-sm">
                    {!isMobile && (
                        <>
                            <Separator />
                            <div className="grid gap-2">
                                <div className="flex gap-2 font-medium leading-none">
                                    A note on how to break dow problems into
                                    small task
                                </div>
                                <div className="text-muted-foreground">
                                    Break complex software problems into
                                    bite-sized tasks. Focus on one goal at a
                                    time to reduce overwhelm, improve clarity,
                                    and make steady, measurable progress.
                                </div>
                            </div>
                            <Separator />
                        </>
                    )}

                    <TaskForm
                        mode="edit"
                        taskData={{
                            title: item.header,
                            type: item.type,
                            status: item.status,
                            priority: item.priority,
                            reviewer: item.reviewer,
                            due: item.due,
                        }}
                    />
                </div>
            </SheetContent>
        </Sheet>
    );
}
