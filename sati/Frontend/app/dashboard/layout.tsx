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
    const userData = user ? await currentUser(user) : null;
    console.log("Session userData:", userData);

    const propData = userData?.id ? await getUserById(userData.id as string) : null;
    console.log("getUserById result:", propData);

    if (propData && !propData.success) {
        console.error("getUserById failed:", propData.error);
    }

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
