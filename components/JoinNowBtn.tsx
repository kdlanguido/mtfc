"use client";
import React from "react";
import { Button } from "@mui/material";

interface JoinNowButtonProps {
    href?: string;
    size?: "small" | "medium" | "large";
    variant?: "text" | "outlined" | "contained";
    children: React.ReactNode;
    onClick?: () => void;
}

const JoinNowButton: React.FC<JoinNowButtonProps> = ({
    href = "",
    // size = "small",
    variant = "contained",
    children,
    onClick,
}) => {
    return (
        <Button
            component="a"
            href={href}
            // size={size}
            variant={variant}
            onClick={onClick}
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