import React from "react";
import {
    ArrowUpCircleIcon,
    Calendar,
    Home,
    Inbox,
    Search,
    Settings,
    UsersIcon,
    FolderIcon,
    Briefcase,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "../../../components/ui/sidebar";
import { NavUser } from "./nav-user";
const data = {
    NavMain: [
        {
            title: "Home",
            url: "/dashboard",
            icon: Home,
        },
        {
            title: "Inbox",
            url: "#",
            icon: Inbox,
        },
        {
            title: "Jobs",
            url: "#",
            icon: Briefcase,
        },
        {
            title: "Search",
            url: "#",
            icon: Search,
        },
        {
            title: "Task",
            url: "/dashboard/task",
            icon: FolderIcon,
        },
        {
            title: "Team",
            url: "#",
            icon: UsersIcon,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
    ],
};

export function AppSidebar(user) {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    className="data-[slot=sidebar-menu-button]:!p-1.5"
                                >
                                    <a href="#">
                                        <ArrowUpCircleIcon className="h-5 w-5" />
                                        <span className="text-base font-semibold">
                                            Sati Technology
                                        </span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            {data.NavMain.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <NavUser user={user} />
            </SidebarContent>
        </Sidebar>
    );
}
