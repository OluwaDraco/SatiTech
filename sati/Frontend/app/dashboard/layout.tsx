"use server";
import React, { use } from "react";
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { SiteHeader } from "../UI/Header";
import { currentUser } from "@/lib/middleware/sessions";
import { cookies } from "next/headers";

import { AppSidebar } from "../UI/Sidebar/app-sidebar";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = cookies().get("session")?.value;

    return (
        <SidebarProvider>
            <AppSidebar user={user} />
            <div className="w-full">
                <SiteHeader />

                <main>{children}</main>
            </div>
        </SidebarProvider>
    );
}
