import { InputBase, Paper, } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";

export default function SearchInput() {
    return (
        <Paper component="form" sx={{ display: "flex", alignItems: "center", width: 600, backgroundColor: "#444", padding: "5px 10px", mb: 2 }}>
            <Search sx={{ color: "white" }} />
            <InputBase placeholder="Search" sx={{ ml: 1, flex: 1, color: "white" }} />
        </Paper>

    );
}
