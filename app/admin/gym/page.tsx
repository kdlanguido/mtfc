"use client"
import AdminSidebar from "@/components/AdminSidebar";
import GymEquipmentsTable from "@/components/GymEquipments/GymEquipmentsTable";
import { AdminSideBarSelectedIndex } from "@/stores/App.store";
import { UserInformation } from "@/stores/UserInfo.store";
import { useAtom } from "jotai";
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
        setAdminSideBarSelectedIndex(5)
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
                <GymEquipmentsTable />
            </div>
        </div>
    )
}
