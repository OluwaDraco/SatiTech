import React from "react";
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { SiteHeader } from "../UI/Header";

import { AppSidebar } from "../UI/Sidebar/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="w-full">
                <SiteHeader />

                <main>{children}</main>
            </div>
        </SidebarProvider>
    );
}
