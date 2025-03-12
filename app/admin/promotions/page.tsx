"use client"
import AdminSidebar from "@/components/AdminSidebar";
import AdminSideBar from "@/components/AdminSidebar";
import { AdminNavLinks, DefaultProfileImgUrl } from "@/constants/app";
import { AdminSideBarSelectedIndex } from "@/stores/App.store";
import { UserInformation } from "@/stores/UserInfo.store";
import { Breadcrumbs, Button, Divider, Link, List, ListItem, ListItemButton, Typography } from "@mui/joy";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {

    const router = useRouter()
    const [adminSideBarSelectedIndex, setAdminSideBarSelectedIndex] = useAtom(AdminSideBarSelectedIndex)
    const [userInformation] = useAtom(UserInformation);
    const [isHydrated, setIsHydrated] = useState(false);
    const handleAdminSidebarClick = (index: number) => {

    }

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return null;
    }

    return (
        <div className="flex">
            <div className="w-1/5 h-screen bg-[#2F4F4F] ">
                <AdminSidebar />
            </div>

            <div className="w-4/5 h-screen px-10 pt-5 bg-zinc-300">
                <Breadcrumbs size="sm" className="pl-0 ml-0">
                    <Link href="/" color="neutral">Home</Link>
                    <Typography className="font-semibold text-black">Profile</Typography>
                </Breadcrumbs>

                <div className="my-10 bg-white border rounded-lg ">
                    <div className="bg-[#235D83] p-5  rounded-t-lg">
                        <Typography className="text-white">Membership Plan</Typography>
                    </div>

                    <div className="p-5">
                        <Typography>Membership Plan</Typography>
                    </div>
                </div>

                <div className="bg-white border rounded-lg ">
                    <div className="bg-[#235D83] p-5  rounded-t-lg">
                        <Typography className="text-white">Recurring Payments</Typography>
                    </div>

                    <div className="p-5">
                        <Typography>Membership Plan</Typography>
                    </div>
                </div>
            </div>

        </div>
    )
}
