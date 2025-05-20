"use client";
import React from "react";
import { CircleDollarSign } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card";
import Link from "next/link";

export default function DataCard() {
    return (
        <Card className="@container/card ">
            <CardHeader className="relative">
                <CardTitle>Full-Stack Developer Needed</CardTitle>
                <CardDescription>
                    {/* Job link on Upwork */}
                    <Link href="https://www.upwork.com/attachments/abc123"></Link>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
                    <CircleDollarSign className="size-6" />
                    <p>HOURLY:$40-$70</p>
                </div>
                <div className="line-clamp-1 flex  mt-5 flex-col gap-2 text-sm text-muted-foreground">
                    <p>Proposals:10 to 15</p>
                    <p>interviews:5</p>
                    <p>Hires:2</p>
                    <p>Duration / Weeks: 12</p>
                </div>
            </CardContent>
            <CardFooter>
                {/* //job description */}
                Looking for an experienced developer to build a web application.
            </CardFooter>
        </Card>
    );
}
