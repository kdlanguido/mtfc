"use client";
import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

interface JoinNowButtonProps {
    href?: string;
    size?: "small" | "medium" | "large";
    variant?: "text" | "outlined" | "contained";
    children: React.ReactNode;
}

const JoinNowButton: React.FC<JoinNowButtonProps> = ({
    variant = "contained",
    children,
}) => {

    const router = useRouter();

    const handleClickJoinNow = () => {
        router.push("/pricing")
    }

    return (
        <Button
            variant={variant}
            onClick={handleClickJoinNow}
            sx={{
                backgroundColor: "#1689DF",
                color: "white",
                textTransform: "capitalize",
                mt: 3,
            }}
        >
            {children}
        </Button>
    );
};
export default JoinNowButton;