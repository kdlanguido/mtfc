"use client"
import { AdminNavLinks, DefaultProfileImgUrl } from "@/constants/app";
import { AdminSideBarSelectedIndex } from "@/stores/App.store";
import { List, ListItem, ListItemButton } from "@mui/joy";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AdminSidebar() {

    const router = useRouter()
    const [adminSideBarSelectedIndex, setAdminSideBarSelectedIndex] = useAtom(AdminSideBarSelectedIndex)
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return null;
    }

    return (
        <>
            <Image
                alt={""}
                src={"/assets/logo.png"}
                height={60}
                width={200}
                className="object-cover mx-auto my-10"
            />

            <List className="mt-4">
                {AdminNavLinks.map((navLink, index) => (
                    <ListItem key={navLink.url}>
                        <ListItemButton
                            className="!text-white !py-4 !font-semibold"
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#213A3A !important",
                                },
                                backgroundColor: adminSideBarSelectedIndex === index ? "#213A3A" : "transparent",
                            }}
                            onClick={() => {
                                setAdminSideBarSelectedIndex(index)
                                router.push(navLink.url)
                            }}
                        >
                            <Image
                                className="mx-3"
                                src={navLink.imgUrl}
                                height={30}
                                width={30}
                                alt={navLink.label}
                            />
                            {navLink.label}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}
