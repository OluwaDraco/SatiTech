"use server";
import React, { use } from "react";
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { SiteHeader } from "../UI/Header";
import { currentUser } from "@/lib/middleware/sessions";
import { cookies } from "next/headers";
import { getUserById } from "../api/graphql/queries";

import { AppSidebar } from "../UI/Sidebar/app-sidebar";
import { any } from "zod";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = cookies().get("session")?.value;
    const userData = await currentUser(user);
    console.log(userData);
    const propData = await getUserById(userData?.id);
    console.log(propData);

    return (
        <SidebarProvider>
            <AppSidebar userData={propData} />
            <div className="w-full">
                <SiteHeader />

                <main>{children}</main>
            </div>
        </SidebarProvider>
    );
}
