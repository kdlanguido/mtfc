"use client"
import AdminSidebar from "@/components/AdminSidebar";
import ProductTable from "@/components/Products/ProductsTable";
import { AdminSideBarSelectedIndex } from "@/stores/App.store";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";

export default function page() {

    const [isHydrated, setIsHydrated] = useState(false);
    const [adminSideBarSelectedIndex, setAdminSideBarSelectedIndex] = useAtom(AdminSideBarSelectedIndex)


    useEffect(() => {
        setIsHydrated(true);
        setAdminSideBarSelectedIndex(6)
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
                <ProductTable />
            </div>

        </div>
    )
}
