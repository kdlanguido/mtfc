"use client";
import { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ExploreIcon from "@mui/icons-material/Explore";
import BarChartIcon from "@mui/icons-material/BarChart";

const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Popular", icon: <LocalFireDepartmentIcon /> },
    { text: "Explore", icon: <ExploreIcon /> },
    { text: "All", icon: <BarChartIcon /> },
];

const CommunitySideBar = () => {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:900px)");

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const sidebarContent = (
        <List
            sx={{
                position: "relative",
                "&::after": {
                    content: '""',
                    display: "block",
                    marginLeft: "10px",
                    marginTop: "10%",
                    borderBottom: "1px solid rgb(255, 255, 255)",
                },
            }}
        >
            {menuItems.map((item, index) => (
                <ListItem key={item.text} disablePadding>
                    <ListItemButton
                        sx={{
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                                backgroundColor: "grey",
                            },
                        }}
                    >
                        <ListItemIcon sx={{ color: "white" }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} sx={{ color: "white" }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );

    return (
        <>
            {isMobile && (
                <IconButton
                    onClick={toggleDrawer}
                    sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        color: "white",
                    }}
                >
                    <MenuIcon />
                </IconButton>
            )}

            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? open : true}
                onClose={toggleDrawer}
                sx={{
                    width: isMobile ? "auto" : 240,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: 240,
                        backgroundColor: isMobile ? "#2C2C2C" : "transparent",
                        color: "white",
                        paddingTop: "90px",
                        borderRight: "none",
                    },
                }}
            >
                {sidebarContent}
            </Drawer>
        </>
    );
};
export default CommunitySideBar;